# MovieApp API Documentation

## Base URL
```
http://localhost:3000/api
```

## Authentication
Most endpoints require authentication using JWT tokens. Include the token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

## Endpoints

### Authentication

#### POST /login
Login with email and password.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "jwt-token-here",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "user@example.com",
    "role_id": 2
  }
}
```

#### POST /register
Register a new user account.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "User created successfully",
  "user": {
    "id": 2,
    "name": "John Doe",
    "email": "user@example.com",
    "role_id": 2
  }
}
```

### Users

#### GET /users
Get all users (Admin only).

**Headers:**
```
Authorization: Bearer <admin-token>
```

**Response:**
```json
[
  {
    "id": 1,
    "name": "Admin",
    "email": "admin@gmail.com",
    "role_id": 1,
    "created_at": "2021-03-03T03:46:39.000Z"
  }
]
```

#### GET /user/:id
Get user by ID.

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "user@example.com",
  "role_id": 2,
  "created_at": "2021-03-03T03:46:39.000Z"
}
```

#### PUT /user/update
Update user profile.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "id": 1,
  "name": "John Updated",
  "email": "john@example.com"
}
```

#### DELETE /user/delete
Delete user (Admin only).

**Headers:**
```
Authorization: Bearer <admin-token>
```

**Query Parameters:**
- `id`: User ID to delete

### Movies

#### GET /movie/all
Get all movies with optional filtering.

**Query Parameters:**
- `searchTerm`: Search term for filtering
- `filter`: Field to filter by (title, genre)

**Example:**
```
GET /movie/all?searchTerm=spider&filter=title
```

**Response:**
```json
[
  {
    "id": 1,
    "title": "Spider-Man: Far from Home",
    "plot": "Following the events of Avengers: Endgame...",
    "genre": "Action",
    "cast": "Tom Holland, Samuel L. Jackson...",
    "language": "English",
    "poster": "https://example.com/poster.jpg",
    "director": "Jon Watts",
    "country": "United States",
    "released": "2019-07-02",
    "created_at": "2021-03-04T04:10:19.000Z"
  }
]
```

#### GET /movie/:id
Get movie by ID.

**Response:**
```json
{
  "id": 1,
  "title": "Spider-Man: Far from Home",
  "plot": "Following the events of Avengers: Endgame...",
  "genre": "Action",
  "cast": "Tom Holland, Samuel L. Jackson...",
  "language": "English",
  "poster": "https://example.com/poster.jpg",
  "director": "Jon Watts",
  "country": "United States",
  "released": "2019-07-02",
  "created_at": "2021-03-04T04:10:19.000Z"
}
```

#### POST /movie/add
Add new movie (Admin only).

**Headers:**
```
Authorization: Bearer <admin-token>
```

**Request Body:**
```json
{
  "title": "New Movie",
  "plot": "Movie plot description...",
  "genre": "Action",
  "cast": "Actor 1, Actor 2",
  "language": "English",
  "poster": "https://example.com/poster.jpg",
  "director": "Director Name",
  "country": "United States",
  "released": "2024-01-01"
}
```

#### PUT /movie/update
Update movie (Admin only).

**Headers:**
```
Authorization: Bearer <admin-token>
```

**Request Body:**
```json
{
  "id": 1,
  "title": "Updated Movie Title",
  "plot": "Updated plot..."
}
```

#### DELETE /movie/delete
Delete movie (Admin only).

**Headers:**
```
Authorization: Bearer <admin-token>
```

**Query Parameters:**
- `id`: Movie ID to delete

### Comments

#### GET /comment/all
Get comments for a movie.

**Query Parameters:**
- `movieID`: Movie ID

**Response:**
```json
[
  {
    "id": 1,
    "content": "Great movie!",
    "movie_id": 1,
    "user_id": 1,
    "parent_id": null,
    "created_at": "2021-03-22T21:47:22.000Z",
    "user_name": "John Doe"
  }
]
```

#### POST /comment/add
Add a comment to a movie.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "content": "Great movie!",
  "movie_id": 1,
  "parent_id": null
}
```

#### PUT /comment/update
Update a comment.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "id": 1,
  "content": "Updated comment content"
}
```

#### DELETE /comment/delete
Delete a comment.

**Headers:**
```
Authorization: Bearer <token>
```

**Query Parameters:**
- `id`: Comment ID to delete

### Ratings

#### GET /rate/:movieID/:userID
Get user's rating for a movie.

**Response:**
```json
{
  "id": 1,
  "user_id": 1,
  "movie_id": 1,
  "rating_id": 4,
  "rating_name": "Good"
}
```

#### GET /rate/movie-rate/:movieID
Get average rating for a movie.

**Response:**
```json
{
  "average_rating": 4.2,
  "total_ratings": 10,
  "rating_breakdown": {
    "1": 0,
    "2": 1,
    "3": 2,
    "4": 4,
    "5": 3
  }
}
```

#### POST /rate/add
Add a rating to a movie.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "user_id": 1,
  "movie_id": 1,
  "rating_id": 4
}
```

#### PUT /rate/update
Update a rating.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "user_id": 1,
  "movie_id": 1,
  "rating_id": 5
}
```

### Comment Likes

#### GET /comment_likes/:movieID/:userID
Get user's comment likes for a movie.

**Response:**
```json
[
  {
    "id": 1,
    "comment_id": 1,
    "user_id": 1,
    "movie_id": 1,
    "comment_like": 1
  }
]
```

#### POST /comment_likes/add
Add like/dislike to a comment.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "comment_id": 1,
  "user_id": 1,
  "movie_id": 1,
  "comment_like": 1
}
```

#### PUT /comment_likes/update
Update comment like/dislike.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "id": 1,
  "comment_like": 0
}
```

## Error Responses

All endpoints may return the following error responses:

### 400 Bad Request
```json
{
  "error": "Invalid request parameters"
}
```

### 401 Unauthorized
```json
{
  "error": "Authentication required"
}
```

### 403 Forbidden
```json
{
  "error": "Insufficient permissions"
}
```

### 404 Not Found
```json
{
  "error": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal server error"
}
```

## Rate Limiting

The API implements rate limiting:
- 100 requests per 15 minutes per IP address
- Exceeded limit returns 429 Too Many Requests

## Health Check

#### GET /health
Check API health status.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 3600
}
``` 