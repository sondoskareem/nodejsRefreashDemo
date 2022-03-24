const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "127.0.0.1:3306",
      user: "root",
      password: "12345678",
      database: "nodejs",
    },
    listPerPage: 10,
  };
  module.exports = config;