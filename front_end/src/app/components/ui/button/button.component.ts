import { Component, Input, Output, EventEmitter } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'app-button',
  template: `
    <button
      [type]="type"
      [disabled]="disabled || loading"
      [class]="buttonClasses"
      (click)="onClick.emit($event)"
      [attr.aria-label]="ariaLabel"
    >
      <span class="loading-spinner" *ngIf="loading"></span>
      <i *ngIf="icon && !loading" [class]="icon" [class.icon-left]="iconPosition === 'left'"></i>
      <span class="button-text" *ngIf="!loading">{{ text }}</span>
      <span class="button-text" *ngIf="loading">{{ loadingText }}</span>
      <i *ngIf="icon && !loading && iconPosition === 'right'" [class]="icon"></i>
    </button>
  `,
  styles: [`
    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--spacing-sm);
      border: none;
      border-radius: var(--radius-md);
      font-weight: var(--font-weight-medium);
      cursor: pointer;
      transition: all var(--transition-normal);
      text-decoration: none;
      white-space: nowrap;
      user-select: none;
      position: relative;
      overflow: hidden;
      font-family: inherit;
    }

    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none !important;
    }

    button:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
    }

    /* Size variants */
    .btn-sm {
      padding: var(--spacing-xs) var(--spacing-md);
      font-size: var(--font-size-sm);
    }

    .btn-md {
      padding: var(--spacing-sm) var(--spacing-lg);
      font-size: var(--font-size-base);
    }

    .btn-lg {
      padding: var(--spacing-md) var(--spacing-xl);
      font-size: var(--font-size-lg);
    }

    /* Color variants */
    .btn-primary {
      background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
      color: var(--white);
    }

    .btn-primary:hover:not(:disabled) {
      background: linear-gradient(135deg, var(--primary-dark), var(--primary-color));
      transform: translateY(-1px);
      box-shadow: var(--shadow-md);
    }

    .btn-secondary {
      background: var(--gray-100);
      color: var(--text-primary);
      border: 1px solid var(--gray-300);
    }

    .btn-secondary:hover:not(:disabled) {
      background: var(--gray-200);
      border-color: var(--gray-400);
      transform: translateY(-1px);
      box-shadow: var(--shadow-md);
    }

    .btn-success {
      background: linear-gradient(135deg, var(--success-color), #059669);
      color: var(--white);
    }

    .btn-success:hover:not(:disabled) {
      background: linear-gradient(135deg, #059669, var(--success-color));
      transform: translateY(-1px);
      box-shadow: var(--shadow-md);
    }

    .btn-danger {
      background: linear-gradient(135deg, var(--danger-color), #dc2626);
      color: var(--white);
    }

    .btn-danger:hover:not(:disabled) {
      background: linear-gradient(135deg, #dc2626, var(--danger-color));
      transform: translateY(-1px);
      box-shadow: var(--shadow-md);
    }

    .btn-warning {
      background: linear-gradient(135deg, var(--warning-color), #d97706);
      color: var(--white);
    }

    .btn-warning:hover:not(:disabled) {
      background: linear-gradient(135deg, #d97706, var(--warning-color));
      transform: translateY(-1px);
      box-shadow: var(--shadow-md);
    }

    .btn-info {
      background: linear-gradient(135deg, var(--info-color), #2563eb);
      color: var(--white);
    }

    .btn-info:hover:not(:disabled) {
      background: linear-gradient(135deg, #2563eb, var(--info-color));
      transform: translateY(-1px);
      box-shadow: var(--shadow-md);
    }

    .btn-outline {
      background: transparent;
      color: var(--primary-color);
      border: 2px solid var(--primary-color);
    }

    .btn-outline:hover:not(:disabled) {
      background: var(--primary-color);
      color: var(--white);
      transform: translateY(-1px);
      box-shadow: var(--shadow-md);
    }

    /* Loading state */
    .loading-spinner {
      width: 1rem;
      height: 1rem;
      border: 2px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      border-top-color: var(--white);
      animation: spin 1s ease-in-out infinite;
    }

    .btn-outline .loading-spinner {
      border-color: rgba(99, 102, 241, 0.3);
      border-top-color: var(--primary-color);
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    /* Icon positioning */
    .icon-left {
      order: -1;
    }

    .button-text {
      font-weight: inherit;
    }

    /* Full width variant */
    .btn-full {
      width: 100%;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
      .btn-lg {
        padding: var(--spacing-sm) var(--spacing-lg);
        font-size: var(--font-size-base);
      }
    }
  `]
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() loadingText: string = 'Loading...';
  @Input() icon?: string;
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() fullWidth: boolean = false;
  @Input() ariaLabel?: string;

  @Output() onClick = new EventEmitter<Event>();

  get buttonClasses(): string {
    const classes = [
      `btn-${this.variant}`,
      `btn-${this.size}`
    ];

    if (this.fullWidth) {
      classes.push('btn-full');
    }

    return classes.join(' ');
  }
} 