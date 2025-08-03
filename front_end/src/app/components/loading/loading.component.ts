import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  template: `
    <div class="loading-container" [class.overlay]="overlay">
      <div class="loading-spinner">
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
        <div class="spinner-ring"></div>
      </div>
      <p class="loading-text" *ngIf="message">{{ message }}</p>
    </div>
  `,
  styles: [`
    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: var(--spacing-2xl);
      min-height: 200px;
    }

    .loading-container.overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(4px);
      z-index: var(--z-modal);
      min-height: 100vh;
    }

    .loading-spinner {
      position: relative;
      width: 60px;
      height: 60px;
    }

    .spinner-ring {
      position: absolute;
      width: 100%;
      height: 100%;
      border: 3px solid transparent;
      border-radius: 50%;
      animation: spin 1.2s linear infinite;
    }

    .spinner-ring:nth-child(1) {
      border-top-color: var(--primary-color);
      animation-delay: 0s;
    }

    .spinner-ring:nth-child(2) {
      border-right-color: var(--primary-light);
      animation-delay: 0.3s;
    }

    .spinner-ring:nth-child(3) {
      border-bottom-color: var(--accent-color);
      animation-delay: 0.6s;
    }

    .spinner-ring:nth-child(4) {
      border-left-color: var(--success-color);
      animation-delay: 0.9s;
    }

    .loading-text {
      margin-top: var(--spacing-lg);
      color: var(--text-secondary);
      font-size: var(--font-size-base);
      font-weight: var(--font-weight-medium);
      text-align: center;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @media (prefers-color-scheme: dark) {
      .loading-container.overlay {
        background: rgba(0, 0, 0, 0.8);
      }
    }
  `]
})
export class LoadingComponent {
  @Input() message: string = 'Loading...';
  @Input() overlay: boolean = false;
} 