const db = require('./node_modules/pg');

const updateSlot = (req, res, next) => {
  const {id, event, start_time, end_time} = req.body;
  const query = 'UPDATE "Slots"'
}

const deleteSlot = (req, res, next) => {
  const {id} = req.body;
  const query = 'DELETE FROM "Slots" WHERE _id = $1';
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
  updateSlot,
  deleteSlot,
  getListofSlots,
  createSlot
}