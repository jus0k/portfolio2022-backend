module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "portfolio2022"),
      user: env("DATABASE_USERNAME", "jusungkim"),
      password: env("DATABASE_PASSWORD", "115931in"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
