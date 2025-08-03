import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

export interface ErrorInfo {
  message: string;
  type: 'error' | 'warning' | 'info';
  timestamp: Date;
  userAgent: string;
  url: string;
  stack?: string;
  statusCode?: number;
  errorCode?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {
  private errorLog: ErrorInfo[] = [];
  private maxLogSize = 100;

  constructor(private injector: Injector) {}

  /**
   * Handle all errors in the application
   */
  handleError(error: Error | HttpErrorResponse): void {
    let errorInfo: ErrorInfo;

    if (error instanceof HttpErrorResponse) {
      errorInfo = this.handleHttpError(error);
    } else {
      errorInfo = this.handleClientError(error);
    }

    // Log the error
    this.logError(errorInfo);

    // Show user-friendly message
    this.showUserMessage(errorInfo);

    // Navigate to error page for critical errors
    if (this.isCriticalError(errorInfo)) {
      this.navigateToErrorPage(errorInfo);
    }

    // Send to external logging service in production
    if (environment.production) {
      this.sendToLoggingService(errorInfo);
    }
  }

  /**
   * Handle HTTP errors
   */
  private handleHttpError(error: HttpErrorResponse): ErrorInfo {
    const router = this.injector.get(Router);

    return {
      message: this.formatValidationErrors(error),
      type: 'error',
      timestamp: new Date(),
      userAgent: navigator.userAgent,
      url: router.url,
      statusCode: error.status,
      errorCode: this.getErrorCode(error),
      stack: undefined // HttpErrorResponse doesn't have a stack property
    };
  }

  /**
   * Handle client-side errors
   */
  private handleClientError(error: Error): ErrorInfo {
    const router = this.injector.get(Router);

    return {
      message: error.message || 'An unexpected error occurred',
      type: 'error',
      timestamp: new Date(),
      userAgent: navigator.userAgent,
      url: router.url,
      stack: error.stack
    };
  }

  /**
   * Format validation errors from server
   */
  private formatValidationErrors(error: HttpErrorResponse): string {
    if (error.error && error.error.details) {
      const details = error.error.details;
      if (Array.isArray(details)) {
        return details.map((detail: any) => detail.message).join(', ');
      }
    }
    return environment.errorMessages.validationError;
  }

  /**
   * Get error code for categorization
   */
  private getErrorCode(error: HttpErrorResponse): string {
    if (error.error && error.error.errorCode) {
      return error.error.errorCode;
    }
    
    // Generate error code based on status and context
    const context = this.getErrorContext(error);
    return `${error.status}_${context}`;
  }

  /**
   * Get error context for better categorization
   */
  private getErrorContext(error: HttpErrorResponse): string {
    const url = error.url || '';
    
    if (url.includes('/login')) return 'AUTH';
    if (url.includes('/movie')) return 'MOVIE';
    if (url.includes('/comment')) return 'COMMENT';
    if (url.includes('/rate')) return 'RATING';
    
    return 'GENERAL';
  }

  /**
   * Log error to local storage
   */
  private logError(errorInfo: ErrorInfo): void {
    this.errorLog.unshift(errorInfo);
    
    // Keep log size manageable
    if (this.errorLog.length > this.maxLogSize) {
      this.errorLog = this.errorLog.slice(0, this.maxLogSize);
    }

    // Store in localStorage for debugging
    try {
      localStorage.setItem('errorLog', JSON.stringify(this.errorLog));
    } catch (e) {
      console.warn('Could not save error to localStorage:', e);
    }
  }

  /**
   * Show user-friendly error message
   */
  private showUserMessage(errorInfo: ErrorInfo): void {
    // You can integrate with a toast/notification service here
    console.error('Error:', errorInfo.message);
    
    // For now, we'll use a simple alert in development
    if (!environment.production) {
      console.group('Error Details');
      console.log('Message:', errorInfo.message);
      console.log('Type:', errorInfo.type);
      console.log('Timestamp:', errorInfo.timestamp);
      console.log('URL:', errorInfo.url);
      console.log('Status Code:', errorInfo.statusCode);
      console.log('Error Code:', errorInfo.errorCode);
      console.groupEnd();
    }
  }

  /**
   * Check if error is critical and requires error page
   */
  private isCriticalError(errorInfo: ErrorInfo): boolean {
    return errorInfo.statusCode === 500 || 
           errorInfo.statusCode === 503 ||
           errorInfo.message.includes('Network Error');
  }

  /**
   * Navigate to error page
   */
  private navigateToErrorPage(errorInfo: ErrorInfo): void {
    const router = this.injector.get(Router);
    
    // Store error info for error page
    sessionStorage.setItem('lastError', JSON.stringify(errorInfo));
    
    // Navigate to error page
    router.navigate(['/error'], { 
      queryParams: { 
        code: errorInfo.errorCode,
        status: errorInfo.statusCode 
      } 
    });
  }

  /**
   * Send error to external logging service
   */
  private sendToLoggingService(errorInfo: ErrorInfo): void {
    // Implement integration with external logging service
    // Examples: Sentry, LogRocket, Bugsnag, etc.
    
    // For now, we'll just log to console
    if (environment.production) {
      console.error('Production Error:', {
        message: errorInfo.message,
        type: errorInfo.type,
        timestamp: errorInfo.timestamp,
        url: errorInfo.url,
        statusCode: errorInfo.statusCode,
        errorCode: errorInfo.errorCode
      });
    }
  }

  /**
   * Get error log
   */
  getErrorLog(): ErrorInfo[] {
    return [...this.errorLog];
  }

  /**
   * Clear error log
   */
  clearErrorLog(): void {
    this.errorLog = [];
    localStorage.removeItem('errorLog');
  }

  /**
   * Get error statistics
   */
  getErrorStats(): {
    total: number;
    byType: { [key: string]: number };
    byStatusCode: { [key: string]: number };
    recent: ErrorInfo[];
  } {
    const byType: { [key: string]: number } = {};
    const byStatusCode: { [key: string]: number } = {};
    
    this.errorLog.forEach(error => {
      byType[error.type] = (byType[error.type] || 0) + 1;
      if (error.statusCode) {
        byStatusCode[error.statusCode.toString()] = (byStatusCode[error.statusCode.toString()] || 0) + 1;
      }
    });

    return {
      total: this.errorLog.length,
      byType,
      byStatusCode,
      recent: this.errorLog.slice(0, 10)
    };
  }

  /**
   * Check if there are recent errors
   */
  hasRecentErrors(minutes: number = 5): boolean {
    const cutoff = new Date(Date.now() - minutes * 60 * 1000);
    return this.errorLog.some(error => error.timestamp > cutoff);
  }

  /**
   * Get last error
   */
  getLastError(): ErrorInfo | null {
    return this.errorLog.length > 0 ? this.errorLog[0] : null;
  }
} 