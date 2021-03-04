const commentCtrl = {},
  db = require("../db/db");

commentCtrl.addComment = (data, res) => {
  let sql = "INSERT INTO comments SET ?";
  db.query(sql, data, (err, _) => {
    if (err) {
      throw err;
    }
    res.json({ status: "success", msg: "Comment added successfully" });
  });
};

commentCtrl.getComments = (movieID, res) => {
  let sql = `SELECT 
  c.content,  
  c.id,  
  c.movie_id,  
  c.user_id, 
  c.parent_id,   
  c.updated_at,
  u.name AS user_name FROM comments c LEFT JOIN users u ON c.user_id = u.id WHERE c.movie_id = ?`;

  db.query(sql, movieID, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
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
