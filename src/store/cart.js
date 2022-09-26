export default {
  state: {
    cart:
    {
      b1: 0,
      b2: 0,
      b3: 0,
      b4: 0,
    },
    totalItems: 0,
    totalCost: 0,
    isOpen: false
  },
  actions: {
    addToCart(context, item) {
      const cartItem = {
        id: item.id,
        quantity: item.quantity
      }
      context.commit('addToCart', cartItem);
      console.log(cartItem);
    },
    updateTotalItems(context) {
      context.commit('updateTotalItems', context)
    },
    toggleCart(context) {
      context.commit('toggleCart', context)
    }
  },
  mutations: {
    addToCart(state, payload) {
      state.cart[payload.id] = payload.quantity;
    },
    updateTotalItems(state) {
      state.totalItems = Object.values(state.cart).reduce((a, b) => a + b);
    },
    toggleCart(state) {
      state.isOpen = !state.isOpen
    }
  },
  getters: {
    getCart(state) {
      return state.cart;
    },
    getTotalItems(state) {
      return state.totalItems;
    },
    getTotalCost(state) {
      return state.totalCost;
    },
    cartIsOpen(state) {
      return state.isOpen;
    }
  }
}