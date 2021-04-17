const slugify = require("slugify");

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.label) {
        data.slug = slugify(data.label.toLowerCase());
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.label) {
        data.slug = slugify(data.label.toLowerCase());
      }
    },
  },
};
