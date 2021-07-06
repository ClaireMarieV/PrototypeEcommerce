module.exports = ({ env }) => ({
  url: env("MY_HEROKU_URL"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "v9y$B&E)H+MbQeThWmZq4t7w!z%C*F-J"),
    },
  },
});
