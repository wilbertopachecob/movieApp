const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user-controller");
const loginCtrl = require("../controllers/login-controller");
const movieCtrl = require("../controllers/movie-controller");
const commentCtrl = require("../controllers/comment-controller");
const rateMovieCtrl = require("../controllers/rate-movie-controller");
const commentLikesCtrl = require("../controllers/comment-likes-controller");
const auth = require("../controllers/auth-controller");
const { validateLogin, validateRegister } = require("../middleware/validation");

const authMiddleware = [auth.verifyToken, auth.validateToken];
const adminMiddlewares = [...authMiddleware, auth.validateAdmin];

// Authentication
router.post("/login", validateLogin, (req, res) => {
  let user = req.body;
  loginCtrl.login(user, res);
});

router.post("/register", validateRegister, (req, res) => {
  let userData = req.body;
  userCtrl.addUser(userData, res);
});

// User routes
router.get("/user", (req, res) => {
  const user = userCtrl.getUserByEmail("juan@gmail.com");
  res.json(user);
});

router.get("/users", ...adminMiddlewares, (req, res) => {
  userCtrl.getAllUsers(res);
});

router.get("/user/:id", ...authMiddleware, (req, res) => {
  const id = req.params.id;
  if (!Number(id)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }
  userCtrl.getUserById(id).then(user => {
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  }).catch(error => {
    res.status(500).json({ error: "Failed to fetch user" });
  });
});

router.post("/user/add", ...adminMiddlewares, (req, res) => {
  let userData = req.body;
  userCtrl.addUser(userData, res);
});

router.put("/user/update", ...authMiddleware, (req, res) => {
  userCtrl.updateUser(req.body, res);
});

router.delete("/user/delete", ...adminMiddlewares, (req, res) => {
  const id = req.query.id;
  if (!Number(id)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }
  userCtrl.deleteUser(id, res);
});

// Movie routes
router.get("/movie/all", (req, res) => {
  let filters = {};
  let searchTerm = req.query.searchTerm;
  let filter = req.query.filter;

  if (searchTerm) {
    filters.searchTerm = searchTerm;
  }
  filters.filter = filter || "title";
  movieCtrl.getMovies(filters, res);
});

router.get("/movie/:movieID", (req, res) => {
  const id = req.params.movieID;
  if (!Number(id)) {
    return res.status(400).json({ error: "Invalid movie ID" });
  }
  movieCtrl.getMovieByID(id, res);
});

router.post("/movie/add", ...adminMiddlewares, (req, res) => {
  let movie = req.body || {};
  movieCtrl.addMovie(movie, res);
});

router.put("/movie/update", ...adminMiddlewares, (req, res) => {
  let movie = req.body || {};
  movieCtrl.updateMovie(movie, res);
});

router.delete("/movie/delete", ...adminMiddlewares, (req, res) => {
  const id = req.query.id;
  if (!Number(id)) {
    return res.status(400).json({ error: "Invalid movie ID" });
  }
  movieCtrl.deleteMovie(id, res);
});

// Comment routes
router.post("/comment/add", ...authMiddleware, (req, res) => {
  commentCtrl.addComment(req.body, res);
});

router.put("/comment/update", ...authMiddleware, (req, res) => {
  commentCtrl.updateComment(req.body, res);
});

router.get("/comment/all", (req, res) => {
  commentCtrl.getComments(req.query.movieID, res);
});

router.delete("/comment/delete", ...authMiddleware, (req, res) => {
  const id = req.query.id;
  if (!Number(id)) {
    return res.status(400).json({ error: "Invalid comment ID" });
  }
  commentCtrl.deleteComment(id, res);
});

// Rating routes
router.get("/rate/:movieID/:userID", (req, res) => {
  const movie_id = req.params.movieID;
  const user_id = req.params.userID;
  if (!user_id || !Number(user_id) || !movie_id || !Number(movie_id)) {
    return res.status(400).json({ error: "Invalid movie or user ID" });
  }
  rateMovieCtrl.getUserRate({ movie_id, user_id }, res);
});

router.get("/rate/movie-rate/:movieID", (req, res) => {
  const movie_id = req.params.movieID;
  if (!movie_id || !Number(movie_id)) {
    return res.status(400).json({ error: "Invalid movie ID" });
  }
  rateMovieCtrl.getMovieRate(movie_id, res);
});

router.post("/rate/add", ...authMiddleware, (req, res) => {
  rateMovieCtrl.addRate(req.body, res);
});

router.put("/rate/update", ...authMiddleware, (req, res) => {
  rateMovieCtrl.updateRate(req.body, res);
});

router.delete("/rate/:movieID/:userID", ...authMiddleware, (req, res) => {
  rateMovieCtrl.deleteRate(req.body, res);
});

// Comment likes routes
router.get("/comment_likes/:movieID/:userID", (req, res) => {
  const movie_id = req.params.movieID;
  const user_id = req.params.userID;
  if (!Number(movie_id) || !Number(user_id)) {
    return res.status(400).json({ error: "Invalid movie or user ID" });
  }
  commentLikesCtrl.getUserMovieCommentLike({ movie_id, user_id }, res);
});

router.post("/comment_likes/add", ...authMiddleware, (req, res) => {
  commentLikesCtrl.addCommentLike(req.body, res);
});

router.put("/comment_likes/update", ...authMiddleware, (req, res) => {
  if (!Number(req.body.id)) {
    return res.status(400).json({ error: "Invalid comment like ID" });
  }
  commentLikesCtrl.updateCommentLike(req.body, res);
});

router.delete("/comment_likes/delete", ...authMiddleware, (req, res) => {
  const id = req.query.id;
  if (!Number(id)) {
    return res.status(400).json({ error: "Invalid comment like ID" });
  }
  commentLikesCtrl.deleteRate(id, res);
});

module.exports = router;
