const BCRYPT_WORK_FACTOR = 12;

const SECRET_KEY = process.env.SECRET_KEY || 'secret';

const postgresUsername = 'yourUsername';

const postgresPassword = 'yourPassword';

module.exports = { BCRYPT_WORK_FACTOR, SECRET_KEY, postgresPassword, postgresUsername };
