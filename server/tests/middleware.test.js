const request = require('supertest');
const express = require('express');
const { validate, validateLogin, validateMovie } = require('../middleware/validation');
const { errorHandler, asyncHandler, AppError } = require('../middleware/errorHandler');
const { generateToken, verifyToken, validatePasswordStrength } = require('../middleware/auth');

// Mock the logger module
jest.mock('../middleware/logger', () => ({
  logger: {
    error: jest.fn(),
    info: jest.fn(),
    warn: jest.fn(),
    debug: jest.fn()
  }
}));

// Create a test app
const createTestApp = () => {
  const app = express();
  app.use(express.json());
  return app;
};

describe('Middleware Tests', () => {
  describe('Validation Middleware', () => {
    let app;

    beforeEach(() => {
      app = createTestApp();
    });

    it('should validate login data correctly', async () => {
      app.post('/login', validateLogin, (req, res) => {
        res.json({ success: true });
      });

      // Valid login data
      const validResponse = await request(app)
        .post('/login')
        .send({
          email: 'test@example.com',
          password: 'password123'
        })
        .expect(200);

      expect(validResponse.body.success).toBe(true);
    });

    it('should reject invalid email format', async () => {
      app.post('/login', validateLogin, (req, res) => {
        res.json({ success: true });
      });

      // Invalid email
      await request(app)
        .post('/login')
        .send({
          email: 'invalid-email',
          password: 'password123'
        })
        .expect(400);
    });

    it('should validate movie data correctly', async () => {
      app.post('/movie', validateMovie, (req, res) => {
        res.json({ success: true });
      });

      // Valid movie data
      const validResponse = await request(app)
        .post('/movie')
        .send({
          title: 'Test Movie',
          plot: 'This is a test movie plot that is long enough to pass validation.',
          genre: 'Action',
          director: 'Test Director',
          cast: 'Test Actor 1, Test Actor 2',
          language: 'English',
          country: 'United States',
          released: '2024-01-01'
        })
        .expect(200);

      expect(validResponse.body.success).toBe(true);
    });

    it('should reject movie with short plot', async () => {
      app.post('/movie', validateMovie, (req, res) => {
        res.json({ success: true });
      });

      // Invalid movie data (short plot)
      await request(app)
        .post('/movie')
        .send({
          title: 'Test Movie',
          plot: 'Short',
          genre: 'Action',
          director: 'Test Director',
          cast: 'Test Actor',
          language: 'English',
          country: 'United States',
          released: '2024-01-01'
        })
        .expect(400);
    });
  });

  describe('Error Handler Middleware', () => {
    let app;

    beforeEach(() => {
      app = createTestApp();
    });

    it('should handle validation errors', async () => {
      app.get('/test', (req, res, next) => {
        const error = new AppError('Validation failed', 400);
        next(error);
      });
      app.use(errorHandler);

      const response = await request(app)
        .get('/test');

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('Validation failed');
    });

    it('should handle async errors', async () => {
      app.get('/async-test', asyncHandler(async (req, res) => {
        throw new AppError('Async error', 500);
      }));
      app.use(errorHandler);

      const response = await request(app)
        .get('/async-test');

      expect(response.status).toBe(500);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toBe('Async error');
    });
  });

  describe('Auth Middleware', () => {
    it('should generate and verify JWT tokens', () => {
      const userId = 1;
      const roleId = 2;

      const token = generateToken(userId, roleId);
      expect(token).toBeDefined();
      expect(typeof token).toBe('string');

      const decoded = verifyToken(token);
      expect(decoded.userId).toBe(userId);
      expect(decoded.roleId).toBe(roleId);
    });

    it('should validate password strength correctly', () => {
      // Strong password
      const strongPassword = 'StrongPass123!';
      const strongResult = validatePasswordStrength(strongPassword);
      expect(strongResult.isValid).toBe(true);
      expect(strongResult.errors).toHaveLength(0);

      // Weak password
      const weakPassword = '123';
      const weakResult = validatePasswordStrength(weakPassword);
      expect(weakResult.isValid).toBe(false);
      expect(weakResult.errors.length).toBeGreaterThan(0);
    });

    it('should reject weak passwords', () => {
      const weakPasswords = [
        '123', // Too short
        'password', // No uppercase, numbers, or special chars
        'PASSWORD', // No lowercase, numbers, or special chars
        'Password', // No numbers or special chars
        'Password123', // No special chars
      ];

      weakPasswords.forEach(password => {
        const result = validatePasswordStrength(password);
        expect(result.isValid).toBe(false);
        expect(result.errors.length).toBeGreaterThan(0);
      });
    });
  });
}); 