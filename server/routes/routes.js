const express = require("express"),
  router = express.Router(),
  userCtrl = require("../controllers/user-controller"),
  loginCtrl = require("../controllers/login-controller"),
  movieCtrl = require("../controllers/movie-controller"),
  commentCtrl = require("../controllers/comment-controller"),
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
    res.status(400);
    res.end();
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
  if (!id || !Number(id)) {
    res.status(400);
    res.end();
    return;
  }
  movieCtrl.deleteMovie(id, res);
});

router.get("/movie/:movieID", (req, res) => {
  const id = req.params.movieID;
  if (!id || !Number(id)) {
    res.status(400);
    res.end();
    return;
  }
  movieCtrl.getMovieByID(id, res);
});

//comments
router.post("/comment/add", (req, res) => {
  commentCtrl.addComment(req.body, res);
});

router.get("/comment/all", (req, res) => {
  commentCtrl.getComments(req.query.movieID, res);
});

router.delete("/comment/delete", (req, res) => {
  const id = req.query.id;
  if (!id || !Number(id)) {
    res.status(400);
    res.end();
    return;
  }
  commentCtrl.deleteComment(id, res);
});

module.exports = router;
