const request = require('supertest');
const express = require('express');
const movieCtrl = require('../controllers/movie-controller');

// Mock the database
jest.mock('../db/db', () => ({
  execute: jest.fn()
}));

const app = express();
app.use(express.json());

// Test route for movie controller
app.get('/test/movies', async (req, res) => {
  await movieCtrl.getMovies(req.query, res);
});

app.get('/test/movie/:id', async (req, res) => {
  await movieCtrl.getMovieByID(req.params.id, res);
});

describe('Movie Controller', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /movies', () => {
    it('should return all movies', async () => {
      const mockMovies = [
        { id: 1, title: 'Test Movie 1' },
        { id: 2, title: 'Test Movie 2' }
      ];

      const db = require('../db/db');
      db.execute.mockResolvedValue([mockMovies]);

      const response = await request(app)
        .get('/test/movies')
        .expect(200);

      expect(response.body).toEqual(mockMovies);
      expect(db.execute).toHaveBeenCalledWith(
        'SELECT * FROM movies ORDER BY created_at DESC',
        []
      );
    });

    it('should filter movies by title', async () => {
      const mockMovies = [{ id: 1, title: 'Test Movie' }];
      const db = require('../db/db');
      db.execute.mockResolvedValue([mockMovies]);

      const response = await request(app)
        .get('/test/movies?searchTerm=Test&filter=title')
        .expect(200);

      expect(response.body).toEqual(mockMovies);
      expect(db.execute).toHaveBeenCalledWith(
        'SELECT * FROM movies WHERE title LIKE ? ORDER BY created_at DESC',
        ['%Test%']
      );
    });
  });

  describe('GET /movie/:id', () => {
    it('should return a specific movie', async () => {
      const mockMovie = { id: 1, title: 'Test Movie' };
      const db = require('../db/db');
      db.execute.mockResolvedValue([[mockMovie]]);

      const response = await request(app)
        .get('/test/movie/1')
        .expect(200);

      expect(response.body).toEqual(mockMovie);
      expect(db.execute).toHaveBeenCalledWith(
        'SELECT * FROM movies WHERE id = ?',
        ['1']
      );
    });

    it('should return 404 for non-existent movie', async () => {
      const db = require('../db/db');
      db.execute.mockResolvedValue([[]]);

      const response = await request(app)
        .get('/test/movie/999')
        .expect(404);

      expect(response.body).toEqual({
        status: 'error',
        message: 'Movie not found'
      });
    });
  });
}); 