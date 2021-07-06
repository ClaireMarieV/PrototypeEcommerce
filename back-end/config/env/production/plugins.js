module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("claire-marie-vaney"),
      api_key: env("442833242335429"),
      api_secret: env("rDBIrMlIy_sGLPSHSVXhbbyts94"),
    },
  },
  // ...
});
