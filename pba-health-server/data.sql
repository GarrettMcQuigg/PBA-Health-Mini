DROP DATABASE IF EXISTS usersdb;

CREATE DATABASE usersdb;

\c usersdb;

DROP TABLE IF EXISTS users;

CREATE TABLE users
(
    userID SERIAL PRIMARY KEY,
    username text NOT NULL,
    email text NOT NULL,
    fullName text NOT NULL,
    password text NOT NULL
);

INSERT INTO users 
    (username, email, fullName, password)
VALUES
    ('gbmcquigg', 'garrettmcquigg@gmail.com', 'Garrett McQuigg', 'password123')