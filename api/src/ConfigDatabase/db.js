const { Sequelize } = require("sequelize");

const db = new Sequelize({
    database: "db83juu9g5muen",
    username: "wyapwqrrxtdqbb",
    password: "ba58e45a5de5b5a9e460601b7aeac1139ce26e8cc57c147a0492f650b9e8af6d",
    host: "ec2-3-212-143-188.compute-1.amazonaws.com",
    port: 5432,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error
      }
    },
  })

module.exports = db;

/*
const {Pool} = require('pg');

const config = {
    user: 'wyapwqrrxtdqbb',
    host: 'ec2-3-212-143-188.compute-1.amazonaws.com',
    password:'ba58e45a5de5b5a9e460601b7aeac1139ce26e8cc57c147a0492f650b9e8af6d',
    database: 'db83juu9g5muen',
    port: '5432',
    ssl: {
        rejectUnauthorized: false
    }
};

const pool = new Pool (config);

module.exports = pool;*/