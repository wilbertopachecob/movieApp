import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AccessibilityService {

  private announcementsElement: HTMLElement | null = null;
  private focusTrapElement: HTMLElement | null = null;
  private lastFocusedElement: HTMLElement | null = null;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.initializeAccessibility();
  }

  private initializeAccessibility(): void {
    // Find or create announcements element
    this.announcementsElement = this.document.getElementById('announcements');
    if (!this.announcementsElement) {
      this.announcementsElement = this.document.createElement('div');
      this.announcementsElement.id = 'announcements';
      this.announcementsElement.setAttribute('aria-live', 'polite');
      this.announcementsElement.setAttribute('aria-atomic', 'true');
      this.announcementsElement.className = 'sr-only';
      this.document.body.appendChild(this.announcementsElement);
    }

    // Find or create focus trap element
    this.focusTrapElement = this.document.getElementById('focus-trap');
    if (!this.focusTrapElement) {
      this.focusTrapElement = this.document.createElement('div');
      this.focusTrapElement.id = 'focus-trap';
      this.focusTrapElement.className = 'sr-only';
      this.focusTrapElement.tabIndex = -1;
      this.document.body.appendChild(this.focusTrapElement);
    }
  }

  /**
   * Announce a message to screen readers
   */
  announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    if (this.announcementsElement) {
      this.announcementsElement.setAttribute('aria-live', priority);
      this.announcementsElement.textContent = message;
      
      // Clear the message after a short delay
      setTimeout(() => {
        if (this.announcementsElement) {
          this.announcementsElement.textContent = '';
        }
      }, 1000);
    }
  }

  /**
   * Save the currently focused element
   */
  saveFocus(): void {
    this.lastFocusedElement = this.document.activeElement as HTMLElement;
  }

  /**
   * Restore focus to the previously focused element
   */
  restoreFocus(): void {
    if (this.lastFocusedElement) {
      this.lastFocusedElement.focus();
    }
  }

  /**
   * Move focus to a specific element
   */
  focusElement(element: HTMLElement | string): void {
    let targetElement: HTMLElement | null = null;
    
    if (typeof element === 'string') {
      targetElement = this.document.getElementById(element);
    } else {
      targetElement = element;
    }

    if (targetElement) {
      targetElement.focus();
    }
  }

  /**
   * Trap focus within a container
   */
  trapFocus(container: HTMLElement): void {
    const focusableElements = container.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    if (firstElement && lastElement) {
      container.addEventListener('keydown', (event) => {
        if (event.key === 'Tab') {
          if (event.shiftKey) {
            if (this.document.activeElement === firstElement) {
              event.preventDefault();
              lastElement.focus();
            }
          } else {
            if (this.document.activeElement === lastElement) {
              event.preventDefault();
              firstElement.focus();
            }
          }
        }
      });
    }
  }

  /**
   * Release focus trap
   */
  releaseFocusTrap(): void {
    // Remove event listeners by cloning and replacing the element
    // This is a simple way to remove all event listeners
  }

  /**
   * Check if reduced motion is preferred
   */
  prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /**
   * Check if high contrast mode is enabled
   */
  prefersHighContrast(): boolean {
    return window.matchMedia('(prefers-contrast: high)').matches;
  }

  /**
   * Check if dark mode is preferred
   */
  prefersDarkMode(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  /**
   * Add skip link functionality
   */
  addSkipLink(targetId: string, label: string): void {
    const skipLink = this.document.createElement('a');
    skipLink.href = `#${targetId}`;
    skipLink.textContent = label;
    skipLink.className = 'skip-link';
    skipLink.setAttribute('aria-label', label);
    
    const skipNavigation = this.document.querySelector('.skip-navigation');
    if (skipNavigation) {
      skipNavigation.appendChild(skipLink);
    }
  }

  /**
   * Announce page title changes
   */
  announcePageTitle(title: string): void {
    this.document.title = title;
    this.announce(`Page loaded: ${title}`);
  }

  /**
   * Announce form validation errors
   */
  announceFormErrors(errors: string[]): void {
    if (errors.length > 0) {
      const errorMessage = `Form has ${errors.length} error${errors.length > 1 ? 's' : ''}: ${errors.join(', ')}`;
      this.announce(errorMessage, 'assertive');
    }
  }

  /**
   * Announce successful actions
   */
  announceSuccess(message: string): void {
    this.announce(message, 'polite');
  }

  /**
   * Announce loading states
   */
  announceLoading(message: string): void {
    this.announce(message, 'polite');
  }

  /**
   * Get accessible name for an element
   */
  getAccessibleName(element: HTMLElement): string {
    // Check aria-label first
    const ariaLabel = element.getAttribute('aria-label');
    if (ariaLabel) return ariaLabel;

    // Check aria-labelledby
    const ariaLabelledBy = element.getAttribute('aria-labelledby');
    if (ariaLabelledBy) {
      const labelElement = this.document.getElementById(ariaLabelledBy);
      if (labelElement) return labelElement.textContent || '';
    }

    // Check for associated label
    if (element.tagName === 'INPUT' || element.tagName === 'SELECT' || element.tagName === 'TEXTAREA') {
      const id = element.getAttribute('id');
      if (id) {
        const label = this.document.querySelector(`label[for="${id}"]`);
        if (label) return label.textContent || '';
      }
    }

    // Fall back to text content
    return element.textContent || element.title || '';
  }

  /**
   * Set accessible name for an element
   */
  setAccessibleName(element: HTMLElement, name: string): void {
    element.setAttribute('aria-label', name);
  }

  /**
   * Check if element is visible to screen readers
   */
  isVisibleToScreenReader(element: HTMLElement): boolean {
    const style = window.getComputedStyle(element);
    return style.display !== 'none' && 
           style.visibility !== 'hidden' && 
           element.getAttribute('aria-hidden') !== 'true';
  }
} 