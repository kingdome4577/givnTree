const db = require('pg');

const updateVol = (req, res, next) => {
  const {id, name, password, email} = req.body;
  const query = 'UPDATE "Volunteers"'
}

const deleteVol = (req, res, next) => {
  const {id} = req.body;
  const query = 'DELETE FROM "Volunteers" WHERE _id = $1';
  const arr = [id];

  db.query(query, arr, err => {
      if (err) {
          return next(err)
      } else {
          return next();
      }
  })
}

module.exports = {
  updateVol,
  deleteVol
}