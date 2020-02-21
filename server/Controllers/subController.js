const db = require('pg');

const updateSub = (req, res, next) => {
  const {id, volunteer, slot} = req.body;
  const query = 'UPDATE "Subscriptions"'
}

const deleteSub = (req, res, next) => {
  const {id} = req.body;
  const query = 'DELETE FROM "Subscriptions" WHERE _id = $1';
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
  updateSub,
  deleteSub
}