const db = require('./node_modules/pg');

const updateOrg = (req, res, next) => {
    const {id, name, description, email, password} = req.body;
    const query = 'UPDATE "Organizations"'
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
  updateOrg,
  createOrg,
}