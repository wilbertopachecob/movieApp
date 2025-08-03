import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, timer } from 'rxjs';
import { catchError, retry, timeout, switchMap, tap, shareReplay } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface ApiResponse<T = any> {
  data?: T;
  message?: string;
  status?: string;
  error?: string;
  details?: any[];
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface CacheItem<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private cache = new Map<string, CacheItem<any>>();
  private loadingSubject = new BehaviorSubject<boolean>(false);
  private errorSubject = new BehaviorSubject<string | null>(null);

  public loading$ = this.loadingSubject.asObservable();
  public error$ = this.errorSubject.asObservable();

  constructor(private http: HttpClient) {}

  /**
   * Make a GET request with caching and error handling
   */
  get<T>(endpoint: string, params?: any, useCache: boolean = true): Observable<T> {
    const url = this.buildUrl(endpoint);
    const cacheKey = this.buildCacheKey('GET', url, params);

    // Check cache first
    if (useCache && this.isCacheValid(cacheKey)) {
      return new Observable(observer => {
        observer.next(this.cache.get(cacheKey)!.data);
        observer.complete();
      });
    }

    this.setLoading(true);
    this.clearError();

    const httpParams = this.buildHttpParams(params);

    return this.http.get<T>(url, { params: httpParams }).pipe(
      timeout(environment.api.timeout),
      retry(environment.api.retryAttempts),
      tap(response => {
        if (useCache) {
          this.setCache(cacheKey, response, environment.cache.movieListTTL);
        }
      }),
      catchError(error => this.handleError(error)),
      tap(() => this.setLoading(false)),
      shareReplay(1)
    );
  }

  /**
   * Make a POST request with error handling
   */
  post<T>(endpoint: string, data: any, headers?: HttpHeaders): Observable<T> {
    const url = this.buildUrl(endpoint);
    
    this.setLoading(true);
    this.clearError();

    return this.http.post<T>(url, data, { headers }).pipe(
      timeout(environment.api.timeout),
      retry(environment.api.retryAttempts),
      catchError(error => this.handleError(error)),
      tap(() => this.setLoading(false))
    );
  }

  /**
   * Make a PUT request with error handling
   */
  put<T>(endpoint: string, data: any, headers?: HttpHeaders): Observable<T> {
    const url = this.buildUrl(endpoint);
    
    this.setLoading(true);
    this.clearError();

    return this.http.put<T>(url, data, { headers }).pipe(
      timeout(environment.api.timeout),
      retry(environment.api.retryAttempts),
      catchError(error => this.handleError(error)),
      tap(() => this.setLoading(false))
    );
  }

  /**
   * Make a DELETE request with error handling
   */
  delete<T>(endpoint: string, params?: any): Observable<T> {
    const url = this.buildUrl(endpoint);
    
    this.setLoading(true);
    this.clearError();

    const httpParams = this.buildHttpParams(params);

    return this.http.delete<T>(url, { params: httpParams }).pipe(
      timeout(environment.api.timeout),
      retry(environment.api.retryAttempts),
      catchError(error => this.handleError(error)),
      tap(() => this.setLoading(false))
    );
  }

  /**
   * Upload file with progress tracking
   */
  upload<T>(endpoint: string, file: File, onProgress?: (progress: number) => void): Observable<T> {
    const url = this.buildUrl(endpoint);
    const formData = new FormData();
    formData.append('file', file);

    this.setLoading(true);
    this.clearError();

    return this.http.post<T>(url, formData, {
      reportProgress: true,
      observe: 'events'
    }).pipe(
      timeout(environment.api.timeout),
      retry(environment.api.retryAttempts),
      catchError(error => this.handleError(error)),
      tap(() => this.setLoading(false))
    );
  }

  /**
   * Clear cache for specific endpoint or all cache
   */
  clearCache(endpoint?: string): void {
    if (endpoint) {
      const keysToDelete = Array.from(this.cache.keys()).filter(key => key.includes(endpoint));
      keysToDelete.forEach(key => this.cache.delete(key));
    } else {
      this.cache.clear();
    }
  }

  /**
   * Get cache statistics
   */
  getCacheStats(): { size: number; keys: string[] } {
    return {
      size: this.cache.size,
      keys: Array.from(this.cache.keys())
    };
  }

  /**
   * Build full URL from endpoint
   */
  private buildUrl(endpoint: string): string {
    return `${environment.apiURL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
  }

  /**
   * Build cache key from method, URL, and params
   */
  private buildCacheKey(method: string, url: string, params?: any): string {
    const paramsString = params ? JSON.stringify(params) : '';
    return `${method}:${url}:${paramsString}`;
  }

  /**
   * Build HTTP params from object
   */
  private buildHttpParams(params?: any): HttpParams {
    let httpParams = new HttpParams();
    
    if (params) {
      Object.keys(params).forEach(key => {
        if (params[key] !== null && params[key] !== undefined) {
          httpParams = httpParams.set(key, params[key].toString());
        }
      });
    }
    
    return httpParams;
  }

  /**
   * Check if cache item is still valid
   */
  private isCacheValid(key: string): boolean {
    const item = this.cache.get(key);
    if (!item) return false;
    
    return Date.now() - item.timestamp < item.ttl;
  }

  /**
   * Set cache item
   */
  private setCache<T>(key: string, data: T, ttl: number): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl
    });
  }

  /**
   * Set loading state
   */
  private setLoading(loading: boolean): void {
    this.loadingSubject.next(loading);
  }

  /**
   * Clear error state
   */
  private clearError(): void {
    this.errorSubject.next(null);
  }

  /**
   * Handle HTTP errors
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = environment.errorMessages.serverError;

    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = environment.errorMessages.networkError;
    } else {
      // Server-side error
      switch (error.status) {
        case 400:
          errorMessage = environment.errorMessages.validationError;
          break;
        case 401:
          errorMessage = environment.errorMessages.unauthorized;
          break;
        case 403:
          errorMessage = environment.errorMessages.unauthorized;
          break;
        case 404:
          errorMessage = environment.errorMessages.notFound;
          break;
        case 429:
          errorMessage = 'Too many requests. Please try again later.';
          break;
        case 500:
          errorMessage = environment.errorMessages.serverError;
          break;
        default:
          errorMessage = environment.errorMessages.serverError;
      }
    }

    this.errorSubject.next(errorMessage);
    this.setLoading(false);

    return throwError(() => new Error(errorMessage));
  }

  /**
   * Retry with exponential backoff
   */
  private retryWithBackoff(maxRetries: number = 3, delay: number = 1000) {
    return (source: Observable<any>) => {
      return source.pipe(
        retry({
          count: maxRetries,
          delay: (error, retryCount) => {
            const backoffDelay = delay * Math.pow(2, retryCount - 1);
            return timer(backoffDelay);
          }
        })
      );
    };
  }
} 