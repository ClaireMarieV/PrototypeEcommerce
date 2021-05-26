import create from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get) => ({
      user: null,
      setUser: (user) => set({ user: user }),
      updateUser: (user) =>
        fetch("/api/me", { method: "POST", body: JSON.stringify(user) }).then(
          (res) =>
            res
              .json()
              .then((response) =>
                res.ok ? response : Promise.reject(response)
              )
              .then((user) => {
                set({ user: user });
              })
        ),

      cart: { products: [] },
      //ajouter un produit au cart avec toutes les info => pas encore d'id
      addProductToCart: (product) => {
        set({
          cart: { ...get().cart, products: [...get().cart.products, product] },
        });
      },
      //supprimer un produit en retrouvant son id
      removeProductFromCart: (productId) => {
        const cart = get().cart;
        const productIndex = cart.products.findIndex(
          (product) => product.id === productId
        );
        const filteredProducts = cart.products.filter(
          (_, index) => index !== productIndex
        );
        set({
          cart: { ...get().cart, products: filteredProducts },
        });
      },
      addItem: (product) => {
        set({
          cart: { ...get().cart, products: [...get().cart.products, product] },
        });
      },
      setItemCount: (productToAdd, productQuantity) => {
        const cart = get().cart;
        let quantity = 0;
        let filteredProducts = [];

        cart.products.map((product) => {
          if (product.id === productToAdd.id && quantity < productQuantity) {
            filteredProducts.push(product);
            quantity++;
          } else if (product.id !== productToAdd.id) {
            filteredProducts.push(product);
          }
        });
        for (let i = quantity; i < productQuantity; i++) {
          filteredProducts.push(productToAdd);
        }
        set({ cart: { ...cart, products: filteredProducts } });
      },
    }),
    { name: "store" }
  )
);
