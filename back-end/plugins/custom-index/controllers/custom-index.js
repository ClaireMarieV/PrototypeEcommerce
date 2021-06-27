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
    const rowEntities = await strapi
      .query("index-row", "custom-index")
      .find({}, [
        {
          path: "index_elements",
          populate: [
            {
              path: "category",
              populate: [{ path: "produits" }],
            },
            { path: "product", populate: [{ path: "categorie" }] },
          ],
        },
      ]);

    console.log(rowEntities);
    console.log(
      rowEntities.map((rowEntity) =>
        sanitizeEntity(rowEntity, {
          model: strapi.plugins["custom-index"].models["index-row"],
        })
      )
    );
    console.log(
      rowEntities
        .map((rowEntity) =>
          sanitizeEntity(rowEntity, {
            model: strapi.plugins["custom-index"].models["index-row"],
          })
        )
        .map((rowEntity) => ({
          ...rowEntity,
          elements: rowEntity.index_elements,
        }))
    );

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
              console.log({ ...element, index_row: rowEntity.id });
              const elementEntity = await strapi
                .query("index-element", "custom-index")
                .create({ ...element, index_row: rowEntity.id });

              return sanitizeEntity(elementEntity, {
                model: strapi.plugins["custom-index"].models["index-element"],
              });
            })
          );

          return {
            ...sanitizeEntity(rowEntity, {
              model: strapi.plugins["custom-index"].models["index-row"],
            }),
            index_elements: elementEntities,
          };
        })
      );
    }
    return entities;
  },
};
