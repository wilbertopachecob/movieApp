import { Directive, ElementRef, Input, HostListener, OnInit, OnDestroy } from '@angular/core';
import { AccessibilityService } from '../services/accessibility.service';

@Directive({
  selector: '[appAccessibility]'
})
export class AccessibilityDirective implements OnInit, OnDestroy {

  @Input() appAccessibility: string = '';
  @Input() announceOnFocus: string = '';
  @Input() announceOnClick: string = '';
  @Input() announceOnEnter: string = '';
  @Input() announceOnSpace: string = '';

  private element: HTMLElement;

  constructor(
    private el: ElementRef,
    private accessibilityService: AccessibilityService
  ) {
    this.element = this.el.nativeElement;
  }

  ngOnInit(): void {
    this.setupAccessibility();
  }

  ngOnDestroy(): void {
    // Clean up any event listeners if needed
  }

  private setupAccessibility(): void {
    // Ensure the element is focusable if it's not already
    if (!this.element.hasAttribute('tabindex') && 
        !['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'].includes(this.element.tagName)) {
      this.element.setAttribute('tabindex', '0');
    }

    // Add role if not present
    if (!this.element.hasAttribute('role')) {
      if (this.element.tagName === 'A') {
        this.element.setAttribute('role', 'link');
      } else if (this.element.tagName === 'BUTTON') {
        this.element.setAttribute('role', 'button');
      }
    }
  }

  @HostListener('focus')
  onFocus(): void {
    if (this.announceOnFocus) {
      this.accessibilityService.announce(this.announceOnFocus);
    }
  }

  @HostListener('click')
  onClick(): void {
    if (this.announceOnClick) {
      this.accessibilityService.announce(this.announceOnClick);
    }
  }

  @HostListener('keydown.enter')
  onEnter(): void {
    if (this.announceOnEnter) {
      this.accessibilityService.announce(this.announceOnEnter);
    }
    // Trigger click event for enter key
    this.element.click();
  }

  @HostListener('keydown.space')
  onSpace(event: KeyboardEvent): void {
    event.preventDefault(); // Prevent page scroll
    if (this.announceOnSpace) {
      this.accessibilityService.announce(this.announceOnSpace);
    }
    // Trigger click event for space key
    this.element.click();
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    // Handle arrow key navigation for custom components
    if (this.appAccessibility === 'navigation') {
      this.handleNavigationKeys(event);
    }
  }

  private handleNavigationKeys(event: KeyboardEvent): void {
    const focusableElements = this.getFocusableElements();
    const currentIndex = focusableElements.indexOf(this.element);
    
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault();
        const nextIndex = (currentIndex + 1) % focusableElements.length;
        focusableElements[nextIndex]?.focus();
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault();
        const prevIndex = currentIndex === 0 ? focusableElements.length - 1 : currentIndex - 1;
        focusableElements[prevIndex]?.focus();
        break;
      case 'Home':
        event.preventDefault();
        focusableElements[0]?.focus();
        break;
      case 'End':
        event.preventDefault();
        focusableElements[focusableElements.length - 1]?.focus();
        break;
    }
  }

  private getFocusableElements(): HTMLElement[] {
    const container = this.element.closest('[role="group"], [role="menu"], [role="menubar"]') || document.body;
    return Array.from(container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )) as HTMLElement[];
  }
}

@Directive({
  selector: '[appFocusTrap]'
})
export class FocusTrapDirective implements OnInit, OnDestroy {

  @Input() appFocusTrap: boolean = true;

  private element: HTMLElement;
  private focusableElements: HTMLElement[] = [];
  private firstElement: HTMLElement | null = null;
  private lastElement: HTMLElement | null = null;

  constructor(
    private el: ElementRef,
    private accessibilityService: AccessibilityService
  ) {
    this.element = this.el.nativeElement;
  }

  ngOnInit(): void {
    if (this.appFocusTrap) {
      this.setupFocusTrap();
    }
  }

  ngOnDestroy(): void {
    // Clean up focus trap
  }

  private setupFocusTrap(): void {
    this.updateFocusableElements();
    
    this.element.addEventListener('keydown', this.handleKeyDown.bind(this));
    
    // Update focusable elements when content changes
    const observer = new MutationObserver(() => {
      this.updateFocusableElements();
    });
    
    observer.observe(this.element, {
      childList: true,
      subtree: true
    });
  }

  private updateFocusableElements(): void {
    this.focusableElements = Array.from(this.element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )) as HTMLElement[];
    
    this.firstElement = this.focusableElements[0] || null;
    this.lastElement = this.focusableElements[this.focusableElements.length - 1] || null;
  }

  private handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Tab') {
      if (this.focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      if (event.shiftKey) {
        if (this.document.activeElement === this.firstElement) {
          event.preventDefault();
          this.lastElement?.focus();
        }
      } else {
        if (this.document.activeElement === this.lastElement) {
          event.preventDefault();
          this.firstElement?.focus();
        }
      }
    }
  }

  private get document(): Document {
    return this.element.ownerDocument;
  }
}

@Directive({
  selector: '[appLiveRegion]'
})
export class LiveRegionDirective implements OnInit {

  @Input() appLiveRegion: 'polite' | 'assertive' | 'off' = 'polite';
  @Input() appLiveRegionAtomic: boolean = false;

  private element: HTMLElement;

  constructor(private el: ElementRef) {
    this.element = this.el.nativeElement;
  }

  ngOnInit(): void {
    this.setupLiveRegion();
  }

  private setupLiveRegion(): void {
    if (this.appLiveRegion !== 'off') {
      this.element.setAttribute('aria-live', this.appLiveRegion);
      this.element.setAttribute('aria-atomic', this.appLiveRegionAtomic.toString());
    }
  }
} 