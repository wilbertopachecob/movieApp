export const environment = {
  production: true,
  apiURL: '/api', // Relative path for production
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
    movieListTTL: 600000, // 10 minutes
    userProfileTTL: 1200000, // 20 minutes
    commentsTTL: 300000 // 5 minutes
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
