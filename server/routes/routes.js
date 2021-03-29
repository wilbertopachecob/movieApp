const express = require("express"),
  router = express.Router(),
  userCtrl = require("../controllers/user-controller"),
  loginCtrl = require("../controllers/login-controller"),
  movieCtrl = require("../controllers/movie-controller"),
  commentCtrl = require("../controllers/comment-controller"),
  rateMovieCtrl = require("../controllers/rate-movie-controller"),
  commentLikesCtrl = require("../controllers/comment-likes-controller"),
  auth = require("../controllers/auth-controller");

const adminMiddlewares = [
  auth.verifyToken,
  auth.validateToken,
  auth.validateAdmin,
];

router.get("/", (req, res) => {
  res.send("Hello from me");
});

//autentication
router.post("/login", (req, res) => {
  let user = req.body;
  if (!user.password || !user.email) {
    res.status(400).end();
    return;
  }
  loginCtrl.login(user, res);
});

//user
router.get("/user", (req, res) => {
  const user = userCtrl.getUserByEmail("juan@gmail.com");
  res.json(user);
});

router.post("/user/add", ...adminMiddlewares, (req, res) => {
  let userData = req.body;
  userCtrl.addUser(userData, res);
});

//movies
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

router.post("/movie/add", ...adminMiddlewares, (req, res) => {
  let movie = req.body || {};
  movieCtrl.addMovie(movie, res);
});

router.put("/movie/update", (req, res) => {
  let movie = req.body || {};
  movieCtrl.updateMovie(movie, res);
});

router.delete("/movie/delete", (req, res) => {
  const id = req.query.id;
  if (!Number(id)) {
    res.status(400).end();
    return;
  }
  movieCtrl.deleteMovie(id, res);
});

router.get("/movie/:movieID", (req, res) => {
  const id = req.params.movieID;
  if (!Number(id)) {
    res.status(400).end();
    return;
  }
  movieCtrl.getMovieByID(id, res);
});

//comments
router.post("/comment/add", (req, res) => {
  commentCtrl.addComment(req.body, res);
});

router.put("/comment/update", (req, res) => {
  commentCtrl.updateComment(req.body, res);
});

router.get("/comment/all", (req, res) => {
  commentCtrl.getComments(req.query.movieID, res);
});

router.delete("/comment/delete", (req, res) => {
  const id = req.query.id;
  if (!Number(id)) {
    res.status(400).end();
    return;
  }
  commentCtrl.deleteComment(id, res);
});

//rate
router.get("/rate/:movieID/:userID", (req, res) => {
  const movie_id = req.params.movieID;
  const user_id = req.params.userID;
  if (!user_id || !Number(user_id) || !movie_id || !Number(movie_id)) {
    res.status(400).end();
    return;
  }
  rateMovieCtrl.getUserRate({ movie_id, user_id }, res);
});

router.get("/rate/movie-rate/:movieID", (req, res) => {
  const movie_id = req.params.movieID;
  if (!movie_id || !Number(movie_id)) {
    res.status(400).end();
    return;
  }
  rateMovieCtrl.getMovieRate(movieID, res);
});

router.post("/rate/add", (req, res) => {
  rateMovieCtrl.addRate(req.body, res);
});

router.put("/rate/update", (req, res) => {
  rateMovieCtrl.updateRate(req.body, res);
});

router.delete("/rate/:movieID/:userID", (req, res) => {
  rateMovieCtrl.deleteRate(req.body, res);
});

//comment_like
router.get("/comment_likes/:movieID/:userID", (req, res) => {
  const movie_id = req.params.movieID;
  const user_id = req.params.userID;
  if (!Number(movie_id) || !Number(user_id)) {
    res.status(400).end();
    return;
  }
  commentLikesCtrl.getUserMovieCommentLike({ movie_id, user_id }, res);
});

router.post("/comment_likes/add", (req, res) => {
  commentLikesCtrl.addCommentLike(req.body, res);
});

router.put("/comment_likes/update", (req, res) => {
  if (!Number(req.body.id)) {
    res.status(400).end();
    return;
  }
  commentLikesCtrl.updateCommentLike(req.body, res);
});

router.delete("/comment_likes/delete", (req, res) => {
  const id = req.query.id;
  if (!Number(req.body.id)) {
    res.status(400).end();
    return;
  }
  commentLikesCtrl.deleteRate(id, res);
});

module.exports = router;
