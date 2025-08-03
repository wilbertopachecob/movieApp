const { body, param, query, validationResult } = require('express-validator');

// Common validation rules
const commonValidations = {
  id: param('id').isInt({ min: 1 }).withMessage('ID must be a positive integer'),
  email: body('email').isEmail().normalizeEmail().withMessage('Valid email is required'),
  password: body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('Password must contain at least one uppercase letter, one lowercase letter, and one number'),
  name: body('name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Name can only contain letters and spaces')
};

// Movie validation rules
const movieValidations = {
  title: body('title')
    .trim()
    .isLength({ min: 1, max: 200 })
    .withMessage('Title must be between 1 and 200 characters'),
  plot: body('plot')
    .trim()
    .isLength({ min: 10, max: 2000 })
    .withMessage('Plot must be between 10 and 2000 characters'),
  genre: body('genre')
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Genre must be between 1 and 50 characters'),
  director: body('director')
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Director must be between 1 and 100 characters'),
  cast: body('cast')
    .trim()
    .isLength({ min: 1, max: 500 })
    .withMessage('Cast must be between 1 and 500 characters'),
  language: body('language')
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Language must be between 1 and 50 characters'),
  country: body('country')
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Country must be between 1 and 100 characters'),
  released: body('released')
    .isISO8601()
    .withMessage('Released date must be a valid date'),
  poster: body('poster')
    .optional()
    .isURL()
    .withMessage('Poster must be a valid URL')
};

// Comment validation rules
const commentValidations = {
  content: body('content')
    .trim()
    .isLength({ min: 1, max: 1000 })
    .withMessage('Comment must be between 1 and 1000 characters'),
  movie_id: body('movie_id')
    .isInt({ min: 1 })
    .withMessage('Movie ID must be a positive integer'),
  parent_id: body('parent_id')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Parent ID must be a positive integer')
};

// Rating validation rules
const ratingValidations = {
  rating_id: body('rating_id')
    .isInt({ min: 1, max: 5 })
    .withMessage('Rating must be between 1 and 5'),
  user_id: body('user_id')
    .isInt({ min: 1 })
    .withMessage('User ID must be a positive integer'),
  movie_id: body('movie_id')
    .isInt({ min: 1 })
    .withMessage('Movie ID must be a positive integer')
};

// Search and filter validation
const searchValidations = {
  searchTerm: query('searchTerm')
    .optional()
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Search term must be between 1 and 100 characters'),
  filter: query('filter')
    .optional()
    .isIn(['title', 'genre', 'director', 'cast'])
    .withMessage('Filter must be one of: title, genre, director, cast'),
  page: query('page')
    .optional()
    .isInt({ min: 1 })
    .withMessage('Page must be a positive integer'),
  limit: query('limit')
    .optional()
    .isInt({ min: 1, max: 50 })
    .withMessage('Limit must be between 1 and 50')
};

// Validation middleware
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: 'Validation failed',
      details: errors.array().map(err => ({
        field: err.param,
        message: err.msg,
        value: err.value
      }))
    });
  }
  next();
};

// Specific validation chains
const validateLogin = [
  commonValidations.email,
  body('password').notEmpty().withMessage('Password is required'),
  validate
];

const validateRegister = [
  commonValidations.name,
  commonValidations.email,
  commonValidations.password,
  validate
];

const validateMovie = [
  movieValidations.title,
  movieValidations.plot,
  movieValidations.genre,
  movieValidations.director,
  movieValidations.cast,
  movieValidations.language,
  movieValidations.country,
  movieValidations.released,
  movieValidations.poster,
  validate
];

const validateComment = [
  commentValidations.content,
  commentValidations.movie_id,
  commentValidations.parent_id,
  validate
];

const validateRating = [
  ratingValidations.rating_id,
  ratingValidations.user_id,
  ratingValidations.movie_id,
  validate
];

const validateSearch = [
  searchValidations.searchTerm,
  searchValidations.filter,
  searchValidations.page,
  searchValidations.limit,
  validate
];

const validateId = [
  commonValidations.id,
  validate
];

module.exports = {
  validate,
  validateLogin,
  validateRegister,
  validateMovie,
  validateComment,
  validateRating,
  validateSearch,
  validateId,
  commonValidations,
  movieValidations,
  commentValidations,
  ratingValidations,
  searchValidations
}; 