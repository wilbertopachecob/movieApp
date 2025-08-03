import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <div class="error-container">
      <div class="error-icon">
        <i class="fas fa-exclamation-triangle"></i>
      </div>
      <h2 class="error-title">{{ title || 'Something went wrong' }}</h2>
      <p class="error-message">{{ message || 'An unexpected error occurred. Please try again.' }}</p>
      <div class="error-actions" *ngIf="showRetry">
        <button class="retry-button" (click)="onRetry.emit()">
          <i class="fas fa-redo"></i>
          <span>Try Again</span>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .error-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: var(--spacing-3xl);
      text-align: center;
      min-height: 300px;
    }

    .error-icon {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, var(--danger-color), #dc2626);
      border-radius: var(--radius-full);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: var(--spacing-xl);
      box-shadow: var(--shadow-lg);
    }

    .error-icon i {
      font-size: var(--font-size-3xl);
      color: var(--white);
    }

    .error-title {
      font-size: var(--font-size-2xl);
      font-weight: var(--font-weight-bold);
      color: var(--text-primary);
      margin-bottom: var(--spacing-md);
    }

    .error-message {
      font-size: var(--font-size-lg);
      color: var(--text-secondary);
      max-width: 500px;
      line-height: var(--line-height-relaxed);
      margin-bottom: var(--spacing-xl);
    }

    .error-actions {
      display: flex;
      gap: var(--spacing-md);
    }

    .retry-button {
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-sm);
      padding: var(--spacing-md) var(--spacing-xl);
      font-size: var(--font-size-base);
      font-weight: var(--font-weight-medium);
      background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
      color: var(--white);
      border: none;
      border-radius: var(--radius-lg);
      cursor: pointer;
      transition: all var(--transition-normal);
      box-shadow: var(--shadow-sm);
    }

    .retry-button:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-md);
      background: linear-gradient(135deg, var(--primary-dark), var(--primary-color));
    }

    .retry-button:active {
      transform: translateY(0);
    }

    .retry-button i {
      font-size: var(--font-size-sm);
    }

    @media (max-width: 768px) {
      .error-container {
        padding: var(--spacing-xl);
      }
      
      .error-icon {
        width: 60px;
        height: 60px;
      }
      
      .error-icon i {
        font-size: var(--font-size-2xl);
      }
      
      .error-title {
        font-size: var(--font-size-xl);
      }
      
      .error-message {
        font-size: var(--font-size-base);
      }
    }
  `]
})
export class ErrorComponent {
  @Input() title?: string;
  @Input() message?: string;
  @Input() showRetry: boolean = true;
  @Input() onRetry = new EventEmitter<void>();
} 