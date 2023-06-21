const { Client } = require('pg');
const { postgresPassword, postgresUsername } = require('./config');

let DB_URI;

if (process.env.NODE_ENV === 'test') {
  DB_URI = 'postgresql:///pbausers_test';
} else {
  DB_URI = `postgresql://${postgresUsername}:${postgresPassword}@localhost:5432/pbausers`;
}

let db = new Client({
  connectionString: DB_URI,
});

db.connect();

module.exports = db;
