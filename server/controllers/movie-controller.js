const movieCtrl = {},
  db = require("../db/db");

movieCtrl.addMovie = (data, res) => {
  let sql = "INSERT INTO movies SET ?";
  db.query(sql, data, (err, _) => {
    if (err) {
      throw err;
    }
    res.json({ status: "success", msg: "Movie added successfully" });
  });
};

movieCtrl.deleteMovie = (id, res) => {
  let sql = "DELETE FROM movies WHERE id = ?";
  db.query(sql, id, (err, _) => {
    if (err) {
      throw err;
    }
    res.json({ status: "success", msg: "Movie deleted successfully" });
  });
};

movieCtrl.updateMovie = (data, res) => {
  const CURRENT_TIMESTAMP = {
    toSqlString: function () {
      return "CURRENT_TIMESTAMP()";
    },
  };
  let updatedValues = [];
  let sql = `UPDATE movies 
  SET 
  updated_at = ? `;
  //concatenating updated values
  Object.keys(data).forEach((key) => {
    if (key !== "id") {
      updatedValues.push(data[key]);
      sql += `, ${key} = ?`;
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

movieCtrl.getMovies = (filters = {}, res) => {
  let sql = "SELECT * FROM movies";
  if (filters && Object.keys(filters).length) {
    sql += ` WHERE ${filters.filter} LIKE '%${filters.searchTerm}%'`;
  }

  db.query(sql, null, (err, results) => {
    if (err) {
      throw err;
    }
    res.json(results);
  });
};

movieCtrl.getMovieByID = (id, res) => {
  let sql = "SELECT * FROM movies WHERE id = ?";
  db.query(sql, id, (err, result) => {
    if (err) {
      throw err;
    }
    res.json(result[0]);
  });
};

module.exports = movieCtrl;
