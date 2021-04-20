const { sanitizeEntity } = require("strapi-utils");

const controller = {
  async update(ctx) {
    const { id } = ctx.params;

    if (!ctx.state.user.id) {
      return ctx.unauthorized(`You can't update this entry`);
    }

    console.log(Object.keys(strapi.services));

    const entity = await strapi.services.users_permissions_user.update(
      { id: ctx.state.user.id },
      { ...JSON.parse(ctx.request.body), id: ctx.state.user.id }
    );

    return sanitizeEntity(entity, { model: strapi.models.user });
  },
};

module.exports = controller;
