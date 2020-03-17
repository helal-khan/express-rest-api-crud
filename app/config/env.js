const env = {
    database: 'testdb',
    username: 'root',
    password: null,
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    baseUrl: '/api/v1'
  };
  
  module.exports = env;