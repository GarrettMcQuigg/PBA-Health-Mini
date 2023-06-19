DROP DATABASE IF EXISTS pbausers;

CREATE DATABASE pbausers;

\c pbausers;

DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    userID SERIAL PRIMARY KEY,
    username text NOT NULL UNIQUE,
    email text NOT NULL,
    fullName text NOT NULL,
    password text NOT NULL
);

INSERT INTO users 
    (username, email, fullName, password)
VALUES
    ('gbmcquigg', 'garrettmcquigg@gmail.com', 'Garrett McQuigg', 'password123')