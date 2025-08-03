const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { AuthenticationError, AuthorizationError } = require('./errorHandler');
const { asyncHandler } = require('./errorHandler');
const db = require('../db/db');

// JWT token generation
const generateToken = (userId, roleId) => {
  return jwt.sign(
    { 
      userId, 
      roleId,
      iat: Math.floor(Date.now() / 1000),
      exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60) // 24 hours
    },
    process.env.SECRET_TOKEN,
    { 
      algorithm: 'HS256',
      issuer: 'movieapp-api',
      audience: 'movieapp-client'
    }
  );
};

// Verify JWT token
const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.SECRET_TOKEN, {
      algorithms: ['HS256'],
      issuer: 'movieapp-api',
      audience: 'movieapp-client'
    });
  } catch (error) {
    throw new AuthenticationError('Invalid or expired token');
  }
};

// Authentication middleware
const authenticate = asyncHandler(async (req, res, next) => {
  let token;

  // Check for token in headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  // Check for token in cookies (if using cookies)
  if (!token && req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  if (!token) {
    throw new AuthenticationError('Access token required');
  }

  try {
    // Verify token
    const decoded = verifyToken(token);

    // Get user from database
    const [users] = await db.execute(
      'SELECT id, name, email, role_id, created_at FROM users WHERE id = ? AND active = 1',
      [decoded.userId]
    );

    if (users.length === 0) {
      throw new AuthenticationError('User not found or inactive');
    }

    const user = users[0];

    // Check if user is still active
    if (!user.active) {
      throw new AuthenticationError('User account is deactivated');
    }

    // Add user to request object
    req.user = {
      id: user.id,
      name: user.name,
      email: user.email,
      roleId: user.role_id,
      createdAt: user.created_at
    };

    next();
  } catch (error) {
    if (error instanceof AuthenticationError) {
      throw error;
    }
    throw new AuthenticationError('Invalid token');
  }
});

// Authorization middleware
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      throw new AuthenticationError('Authentication required');
    }

    if (!roles.includes(req.user.roleId)) {
      throw new AuthorizationError(`Access denied. Required roles: ${roles.join(', ')}`);
    }

    next();
  };
};

// Admin authorization
const requireAdmin = authorize(1);

// User authorization (admin or regular user)
const requireUser = authorize(1, 2);

// Optional authentication (doesn't throw error if no token)
const optionalAuth = asyncHandler(async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token && req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  if (token) {
    try {
      const decoded = verifyToken(token);
      const [users] = await db.execute(
        'SELECT id, name, email, role_id, created_at FROM users WHERE id = ? AND active = 1',
        [decoded.userId]
      );

      if (users.length > 0) {
        const user = users[0];
        req.user = {
          id: user.id,
          name: user.name,
          email: user.email,
          roleId: user.role_id,
          createdAt: user.created_at
        };
      }
    } catch (error) {
      // Silently ignore token errors for optional auth
    }
  }

  next();
});

// Password hashing
const hashPassword = async (password) => {
  const saltRounds = parseInt(process.env.BCRYPT_ROUNDS) || 12;
  return await bcrypt.hash(password, saltRounds);
};

// Password verification
const verifyPassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

// Rate limiting for authentication endpoints
const authRateLimit = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Too many authentication attempts, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
};

// Password strength validation
const validatePasswordStrength = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const errors = [];

  if (password.length < minLength) {
    errors.push(`Password must be at least ${minLength} characters long`);
  }
  if (!hasUpperCase) {
    errors.push('Password must contain at least one uppercase letter');
  }
  if (!hasLowerCase) {
    errors.push('Password must contain at least one lowercase letter');
  }
  if (!hasNumbers) {
    errors.push('Password must contain at least one number');
  }
  if (!hasSpecialChar) {
    errors.push('Password must contain at least one special character');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

// Session management
const createSession = (userId, token) => {
  // In a real application, you might want to store sessions in Redis
  // For now, we'll just return the token
  return {
    token,
    userId,
    createdAt: new Date(),
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
  };
};

module.exports = {
  generateToken,
  verifyToken,
  authenticate,
  authorize,
  requireAdmin,
  requireUser,
  optionalAuth,
  hashPassword,
  verifyPassword,
  authRateLimit,
  validatePasswordStrength,
  createSession
}; 