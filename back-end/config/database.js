const parse = require("pg-connection-string").parse;

module.exports = ({ env }) => {
  const config = parse(
    env(
      "DATABASE_URL",
      "postgres://postgres:S*ezane88@localhost:5432/ecommerceHabaah"
    )
  );
  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "postgres",
          host: config.host,
          port: config.port,
          database: config.database,
          username: config.user,
          password: config.password,
        },
        options: { ssl: true },
      },
    },
  };
};
