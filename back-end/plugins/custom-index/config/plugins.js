module.exports = ({ env }) => ({
  // ...
  email: {
    provider: "mailtrap",
    providerOptions: {
      user: env("MAILTRAP_USER", "e6237109920bfc"),
      password: env("MAILTRAP_PASSWORD", "b0feaae6b9997b"),
    },
    settings: {
      defaultFrom: env("MAILTRAP_DEFAULT_FROM", "default@value.com"),
      defaultReplyTo: env("MAILTRAP_DEFAULT_REPLY_TO", "default@value.com"),
    },
  },
  // ...
});
