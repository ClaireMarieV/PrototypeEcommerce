const { sanitizeEntity } = require("strapi-utils");

/**
 * custom-index.js controller
 *
 * @description: A set of functions called "actions" of the `custom-index` plugin.
 */

module.exports = {
  /**
   * Default action.
   *
   * @return {Object}
   */

  index: async (ctx) => {
    // Add your own logic here.
    const rowEntities = await strapi.query("index-row", "custom-index").find();
    return rowEntities
      .map((rowEntity) =>
        sanitizeEntity(rowEntity, {
          model: strapi.plugins["custom-index"].models["index-row"],
        })
      )
      .map((rowEntity) => ({
        ...rowEntity,
        elements: rowEntity.index_elements,
      }));
  },

  async update(ctx) {
    // delete everything
    await strapi.query("index-row", "custom-index").delete();
    await strapi.query("index-element", "custom-index").delete();

    // create
    let entities;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entities = await strapi.services.restaurant.create(data, { files });
    } else {
      entities = await Promise.all(
        JSON.parse(ctx.request.body).map(async (row) => {
          const rowEntity = await strapi
            .query("index-row", "custom-index")
            .create(row);

          const elementEntities = await Promise.all(
            row.elements.map(async (element) => {
              const elementEntity = await strapi
                .query("index-element", "custom-index")
                .create({ ...element, index_row: rowEntity.id });

              return sanitizeEntity(elementEntity, {
                model: strapi.plugins["custom-index"].models["index-element"],
              });
            })
          );

          return sanitizeEntity(rowEntity, {
            model: strapi.plugins["custom-index"].models["index-row"],
          });
        })
      );
    }
    return entities;
  },
};
