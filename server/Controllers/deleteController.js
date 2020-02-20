const db = require('pg');

const deleteUser = (req, res, next) => {
  const {id} = req.body;
  const query = 'DELETE FROM "Users" WHERE _id = $1';
  const arr = [id];

  db.query(query, arr, err => {
      if (err) {
          return next(err)
      } else {
          return next();
      }
  })
}

const deleteOrg = (req, res, next) => {
  const {id} = req.body;
  const query = 'DELETE FROM "Organizations" WHERE _id = $1';
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
  deleteOrg,
  deleteUser
}
module.exports = {
  deleteUser
}