module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: "cloudinary",
    providerOptions: {
      cloud_name: env("claire-marie-vaney"),
      api_key: env("442833242335429"),
      api_secret: env("rDBIrMlIy_sGLPSHSVXhbbyts94"),
      cloudinary_url: env(
        "cloudinary://442833242335429:rDBIrMlIy_sGLPSHSVXhbbyts94@claire-marie-vaney"
      ),
    },
  },
  // ...
});
