const db = require('pg');

const updateEvent = (req, res, next) => {
  const {id, name, organization, description, start_time, end_time} = req.body;
  const query = 'UPDATE FROM "Events" '
}

const deleteEvent = (req, res, next) => {
  const {id} = req.body;
  const query = 'DELETE FROM "Events" WHERE _id = $1';
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
  updateEvent,
  deleteEvent
}