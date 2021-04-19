const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

const controller = {
  /**
   * Create a record.
   *
   * @return {Object}
   */
  async find(ctx) {
    if (!ctx.state.user) {
      ctx.response.status = 401;
      return ctx.send();
    }

    ctx.query["users_permissions_user.id"] = ctx.state.user.id;

    let cart;
    if (ctx.query._q) {
      [cart] = await strapi.services.panier.search(ctx.query);
    } else {
      [cart] = await strapi.services.panier.find(ctx.query);
    }

    if (!cart) {
      return controller.create(ctx);
    }

    return sanitizeEntity(cart, { model: strapi.models.panier });
  },

  async create(ctx) {
    let entity;
    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      data.users_permissions_user = ctx.state.user.id;
      entity = await strapi.services.panier.create(data, { files });
    } else {
      ctx.request.body.users_permissions_user = ctx.state.user.id;
      entity = await strapi.services.panier.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.panier });
  },

  async addProduct(ctx) {
    let entity;

    const [cart] = await strapi.services.panier.find({
      "users_permissions_user.id": ctx.state.user.id,
    });

    if (!cart) {
      return ctx.unauthorized(`You can't update this entry`);
    }

    const [product] = await strapi.services.produit.find({
      id: ctx.params.id,
    });

    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.panier.update({ id }, data, {
        files,
      });
    } else {
      entity = await strapi.services.panier.update(
        { id: cart.id },
        {
          produits: cart.produits.concat([ctx.params.id]),
        }
      );
    }

    return sanitizeEntity(entity, { model: strapi.models.panier });
  },

  async removeProduct(ctx) {
    let entity;

    const [cart] = await strapi.services.panier.find({
      "users_permissions_user.id": ctx.state.user.id,
    });

    if (!cart) {
      return ctx.unauthorized(`You can't update this entry`);
    }

    const [product] = await strapi.services.produit.find({
      id: ctx.params.id,
    });

    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.panier.update({ id }, data, {
        files,
      });
    } else {
      const products = cart.produits.map((product) => product.id);

      const index = products.indexOf(ctx.params.id);

      if (index > -1) {
        products.splice(index, 1);
      }

      entity = await strapi.services.panier.update(
        { id: cart.id },
        {
          produits: products,
        }
      );
    }

    return sanitizeEntity(entity, { model: strapi.models.panier });
  },
  /**
   * Update a record.
   *
   * @return {Object}
   */

  async update(ctx) {
    const { id } = ctx.params;

    let entity;

    const [panier] = await strapi.services.panier.find({
      id: ctx.params.id,
      "users_permissions_user.id": ctx.state.user.id,
    });

    if (!panier) {
      return ctx.unauthorized(`You can't update this entry`);
    }

    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.panier.update({ id }, data, {
        files,
      });
    } else {
      entity = await strapi.services.panier.update({ id }, ctx.request.body);
    }

    return sanitizeEntity(entity, { model: strapi.models.panier });
  },

  /**
   * Delete a record.
   *
   * @return {Object}
   */

  async delete(ctx) {
    const { id } = ctx.params;

    let entity;

    const [panier] = await strapi.services.panier.find({
      id: ctx.params.id,
      "users_permissions_user.id": ctx.state.user.id,
    });

    if (!panier) {
      return ctx.unauthorized(`You can't update this entry`);
    }

    if (ctx.is("multipart")) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.panier.delete({ id }, data, {
        files,
      });
    } else {
      entity = await strapi.services.panier.update({ id }, ctx.request.body);
    }

    return sanitizeEntity(entity, { model: strapi.models.panier });
  },
};

module.exports = controller;
