const { Pool } = require('pg');

// const PG_URI = 'postgres://gruiufez:U5cL5auKT34bY6woX7VcAsu_FqpjPTGN@rajje.db.elephantsql.com:5432/gruiufez'

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback)
  }
};