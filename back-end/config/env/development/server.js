module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "v9y$B&E)H+MbQeThWmZq4t7w!z%C*F-J"),
    },
  },
});
