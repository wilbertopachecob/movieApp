const commentCtrl = {},
  db = require("../db/db");

commentCtrl.getComments = (movieID, res) => {
  let sql = `SELECT 
  c.content,  
  c.id,  
  c.movie_id,  
  c.user_id, 
  c.parent_id,   
  c.updated_at,
  u.name AS user_name,
  COALESCE((SELECT	
    SUM(CASE WHEN comment_like = 1 THEN 1 ELSE 0 END)    
  FROM comment_likes WHERE comment_likes.comment_id = c.id), 0) AS likes,
   COALESCE((SELECT	
    SUM(CASE WHEN comment_like = 0 THEN 1 ELSE 0 END)    
  FROM comment_likes WHERE comment_likes.comment_id = c.id), 0) AS dislikes
  FROM comments c 
  LEFT JOIN users u ON c.user_id = u.id
  WHERE c.movie_id = ?`;

  db.query(sql, movieID, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
};

commentCtrl.getComment = (commentID, res) => {
  let sql = `SELECT 
  c.content,  
  c.id,  
  c.movie_id,  
  c.user_id, 
  c.parent_id,   
  c.updated_at,
  c.created_at,
  u.name AS user_name FROM comments c LEFT JOIN users u ON c.user_id = u.id WHERE c.id = ?  LIMIT 1`;

  db.query(sql, commentID, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results[0]);
  });
};

commentCtrl.addComment = (data, res) => {
  let sql = "INSERT INTO comments SET ?";
  db.query(sql, data, (err, info) => {
    if (err) {
      throw err;
    }
    commentCtrl.getComment(info.insertId, res);
  });
};

commentCtrl.updateComment = (comment, res) => {
  let sql = "UPDATE comments SET content = ? WHERE id = ?";
  if (Number(comment.id) && comment.content) {
    db.query(sql, [comment.content, comment.id], (err, _) => {
      if (err) {
        throw err;
      }
      res.json({ status: "success", msg: "Comment updated successfully" });
    });
    return;
  }
  res.status(400);
  res.end();
  return;
};

commentCtrl.deleteComment = (id, res) => {
  let sql = "DELETE FROM comments WHERE id = ?";
  db.query(sql, id, (err, _) => {
    if (err) {
      throw err;
    }
    res.json({ status: "success", msg: "Comment deleted successfully" });
  });
};

module.exports = commentCtrl;
