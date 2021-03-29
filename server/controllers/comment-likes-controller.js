const commentLikesCtrl = {},
  db = require("../db/db");

//returns the id of the inserted comment_like
commentLikesCtrl.addCommentLike = (data, res) => {
  let sql = "INSERT INTO comment_likes SET ?";
  db.query(sql, data, (err, info) => {
    if (err) {
      throw err;
    }
    res.json(info.insertId);
  });
};

commentLikesCtrl.updateCommentLike = (data, res) => {
  if ([0, 1, null].includes(data.comment_like)) {
    data.comment_like = data.comment_like === null ? 2 : data.comment_like;
    let sql =
      "UPDATE comment_likes SET comment_like = NULLIF( ?, 2) WHERE id = ?";
    db.query(sql, [data.comment_like, data.id], (err, _) => {
      if (err) {
        throw err;
      }
      res.json({ status: "success", msg: "Comment like added successfully" });
    });
  }
};

//sets the like to NULL, just so we can use this value for BI later
commentLikesCtrl.removeLike = (id, res) => {
  let sql = "UPDATE comment_likes SET comment_like = NULL WHERE id = ?";
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
    "SELECT id, comment_id, comment_like FROM comment_likes WHERE movie_id = ? AND user_id = ?";
  db.query(sql, [data.movie_id, data.user_id], (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result);
  });
};

module.exports = commentLikesCtrl;
