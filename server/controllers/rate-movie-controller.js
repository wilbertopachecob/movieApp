const rateMovieCtrl = {},
  db = require("../db/db");

rateMovieCtrl.addRate = (data, res) => {
  let sql = "INSERT INTO movie_ratings SET ?";
  db.query(sql, data, (err, _) => {
    if (err) {
      throw err;
    }
    res.json({ status: "success", msg: "Movie rate added successfully" });
  });
};

rateMovieCtrl.deleteRate = (data, res) => {
  let sql = "DELETE FROM movie_ratings WHERE movie_id = ? AND user_id = ?";
  db.query(sql, [data.movie_id, data.user_id], (err, _) => {
    if (err) {
      throw err;
    }
    res.json({ status: "success", msg: "Movie rate deleted successfully" });
  });
};

rateMovieCtrl.getUserRate = (data, res) => {
  let sql =
    "SELECT id, rating_id FROM movie_ratings WHERE movie_id = ? AND user_id = ? LIMIT 1";
  console.log({ sql, data });
  db.query(sql, [data.movie_id, data.user_id], (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result.length ? result[0] : {});
  });
};

rateMovieCtrl.getMovieRate = (movie_id, res) => {
  let sql = "SELECT rating_id FROM movie_ratings WHERE movie_id = ?";
  db.query(sql, movie_id, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result.length ? 0 : result[0].rating_id);
  });
};

rateMovieCtrl.updateRate = (data, res) => {
  const CURRENT_TIMESTAMP = {
    toSqlString: function () {
      return "CURRENT_TIMESTAMP()";
    },
  };
  let updatedValues = [];
  let sql = `UPDATE movie_ratings 
  SET 
  updated_at = ? `;
  //concatenating updated values
  Object.keys(data).forEach((key) => {
    if (key !== "id") {
      updatedValues.push(data[key]);
      sql += `, ${db.escapeId(key)} = ?`;
    }
  });
  sql += `
  WHERE
      id = ?`;
  db.query(sql, [CURRENT_TIMESTAMP, ...updatedValues, data.id], (err, _) => {
    if (err) {
      throw err;
    }
    res.json({ status: "success", msg: "Movie updated successfully" });
  });
};

module.exports = rateMovieCtrl;
