const commentLikesCtrl = {},
  db = require("../db/db");

commentLikesCtrl.addCommentLike = (data, res) => {
  let sql = "INSERT INTO comment_likes SET ?";
  db.query(sql, data, (err, _) => {
    if (err) {
      throw err;
    }
    res.json({ status: "success", msg: "Comment like added successfully" });
  });
};

//sets the like to NULL, just so we can use this value for BI later
commentLikesCtrl.removeLike = (id, res) => {
  let sql = "UPDATE comment_likes SET like = NULL WHERE id = ?";
  db.query(sql, id, (err, _) => {
    if (err) {
      throw err;
    }
    res.json({ status: "success", msg: "Removed like successfully" });
  });
};

commentLikesCtrl.deleteCommentLike = (id, res) => {
  let sql = "DELETE FROM comment_likes WHERE id = ?";
  db.query(sql, id, (err, _) => {
    if (err) {
      throw err;
    }
    res.json({ status: "success", msg: "Deleted entry successfully" });
  });
};

//return all the likes a user has given to the comments of a movie
commentLikesCtrl.getUserMovieCommentLike = (data, res) => {
  let sql =
    "SELECT comment_id, comment_like FROM comment_likes WHERE movie_id = ? AND user_id = ?";
  db.query(sql, [data.movie_id, user_id], (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
};

module.exports = commentLikesCtrl;
