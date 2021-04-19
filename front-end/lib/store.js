import create from "zustand";

export const useStore = create((set, get) => ({
  user: null,
  setUser: (user) => set({ user: user }),
  cart: null,
  fetchCart: () =>
    fetch("/api/cart").then((res) =>
      res
        .json()
        .then((response) => (res.ok ? response : Promise.reject(response)))
        .then((cart) => {
          set({ cart: cart });
        })
    ),
  addProductToCart: (productId) =>
    fetch("/api/cart/" + productId, { method: "POST" }).then((res) =>
      res
        .json()
        .then((response) => (res.ok ? response : Promise.reject(response)))
        .then((cart) => {
          set({ cart: cart });
        })
    ),
  removeProductFromCart: (productId) =>
    fetch("/api/cart/" + productId, { method: "DELETE" }).then((res) =>
      res
        .json()
        .then((response) => (res.ok ? response : Promise.reject(response)))
        .then((cart) => {
          set({ cart: cart });
        })
    ),
}));
