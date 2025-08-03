// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiURL: 'http://localhost:3000/api',
  appName: 'MovieApp',
  version: '2.0.0',
  
  // Feature flags
  features: {
    enableUserRegistration: true,
    enableMovieRecommendations: false,
    enableWatchlist: false,
    enableSocialSharing: false,
    enableEmailNotifications: false
  },
  
  // API Configuration
  api: {
    timeout: 30000,
    retryAttempts: 3,
    retryDelay: 1000
  },
  
  // Pagination
  pagination: {
    defaultPageSize: 10,
    maxPageSize: 50
  },
  
  // Cache Configuration
  cache: {
    movieListTTL: 300000, // 5 minutes
    userProfileTTL: 600000, // 10 minutes
    commentsTTL: 180000 // 3 minutes
  },
  
  // Error Messages
  errorMessages: {
    networkError: 'Network error. Please check your connection.',
    serverError: 'Server error. Please try again later.',
    unauthorized: 'You are not authorized to perform this action.',
    notFound: 'The requested resource was not found.',
    validationError: 'Please check your input and try again.'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
