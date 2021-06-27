module.exports = ({ env }) => ({
  url: env("MY_HEROKU_URL"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "c11dacff9fcda4614fa8741f11d4c540"),
    },
  },
});
