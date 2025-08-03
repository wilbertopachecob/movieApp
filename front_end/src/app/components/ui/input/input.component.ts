import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  template: `
    <div class="input-container" [class.has-error]="hasError" [class.has-icon]="icon">
      <label *ngIf="label" [for]="id" class="input-label">{{ label }}</label>
      
      <div class="input-wrapper">
        <i *ngIf="icon" [class]="icon" class="input-icon"></i>
        <input
          [id]="id"
          [type]="type"
          [placeholder]="placeholder"
          [value]="value"
          [disabled]="disabled"
          [readonly]="readonly"
          [required]="required"
          [attr.aria-describedby]="ariaDescribedBy"
          [attr.aria-label]="ariaLabel"
          class="input-field"
          [class.has-icon]="icon"
          (input)="onInput($event)"
          (blur)="onBlur()"
          (focus)="onFocus()"
        />
      </div>
      
      <div *ngIf="errorMessage" class="error-message">
        <i class="fas fa-exclamation-circle"></i>
        <span>{{ errorMessage }}</span>
      </div>
      
      <div *ngIf="hint" class="input-hint">
        <i class="fas fa-info-circle"></i>
        <span>{{ hint }}</span>
      </div>
    </div>
  `,
  styles: [`
    .input-container {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-xs);
    }

    .input-label {
      font-size: var(--font-size-sm);
      font-weight: var(--font-weight-medium);
      color: var(--text-secondary);
      margin-bottom: var(--spacing-xs);
    }

    .input-wrapper {
      position: relative;
      display: flex;
      align-items: center;
    }

    .input-field {
      width: 100%;
      padding: var(--spacing-md) var(--spacing-lg);
      font-size: var(--font-size-base);
      border: 2px solid var(--gray-200);
      border-radius: var(--radius-lg);
      background: var(--bg-primary);
      color: var(--text-primary);
      transition: all var(--transition-normal);
      font-family: inherit;
    }

    .input-field.has-icon {
      padding-left: calc(var(--spacing-lg) + 1.5rem);
    }

    .input-field:focus {
      outline: none;
      border-color: var(--primary-color);
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
    }

    .input-field::placeholder {
      color: var(--text-muted);
    }

    .input-field:disabled {
      background: var(--gray-50);
      color: var(--text-muted);
      cursor: not-allowed;
    }

    .input-field:readonly {
      background: var(--gray-50);
    }

    .input-icon {
      position: absolute;
      left: var(--spacing-md);
      color: var(--text-muted);
      font-size: var(--font-size-lg);
      pointer-events: none;
      transition: color var(--transition-normal);
      z-index: 1;
    }

    .input-field:focus ~ .input-icon {
      color: var(--primary-color);
    }

    /* Error states */
    .has-error .input-field {
      border-color: var(--danger-color);
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }

    .has-error .input-field:focus {
      border-color: var(--danger-color);
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
    }

    .has-error .input-icon {
      color: var(--danger-color);
    }

    .error-message {
      display: flex;
      align-items: center;
      gap: var(--spacing-xs);
      color: var(--danger-color);
      font-size: var(--font-size-sm);
      animation: slideIn 0.3s ease-out;
    }

    .error-message i {
      font-size: var(--font-size-base);
    }

    .input-hint {
      display: flex;
      align-items: center;
      gap: var(--spacing-xs);
      color: var(--text-muted);
      font-size: var(--font-size-sm);
    }

    .input-hint i {
      font-size: var(--font-size-base);
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Size variants */
    .input-sm .input-field {
      padding: var(--spacing-sm) var(--spacing-md);
      font-size: var(--font-size-sm);
    }

    .input-lg .input-field {
      padding: var(--spacing-lg) var(--spacing-xl);
      font-size: var(--font-size-lg);
    }

    /* Responsive design */
    @media (max-width: 768px) {
      .input-field {
        padding: var(--spacing-sm) var(--spacing-md);
      }
      
      .input-field.has-icon {
        padding-left: calc(var(--spacing-md) + 1.5rem);
      }
      
      .input-icon {
        left: var(--spacing-sm);
      }
    }

    /* Dark mode adjustments */
    @media (prefers-color-scheme: dark) {
      .input-field {
        background: var(--bg-primary);
        border-color: var(--gray-600);
      }
      
      .input-field:focus {
        border-color: var(--primary-color);
      }
      
      .input-field:disabled {
        background: var(--gray-800);
      }
    }
  `],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() id?: string;
  @Input() type: string = 'text';
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() icon?: string;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() required: boolean = false;
  @Input() errorMessage?: string;
  @Input() hint?: string;
  @Input() ariaLabel?: string;
  @Input() ariaDescribedBy?: string;

  value: string = '';
  hasError: boolean = false;

  private onChange = (value: string) => {};
  private onTouched = () => {};

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
    this.hasError = !!this.errorMessage;
  }

  onBlur(): void {
    this.onTouched();
    this.hasError = !!this.errorMessage;
  }

  onFocus(): void {
    this.hasError = false;
  }
} 