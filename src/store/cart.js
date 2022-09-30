export default {
  state: {
    cart:
      // {
      //   b1: { quantity: 0 },
      //   b2: { quantity: 0 },
      //   b3: { quantity: 0 },
      //   b4: { quantity: 0 },
      // },
      [],
    totalItems: 0,
    totalCost: 0,
    isOpen: false
  },
  actions: {
    addToCart(context, item) {
      const cartItem = {
        id: item.id,
        title: item.title,
        color: item.color,
        price: item.price,
        quantity: item.quantity,
      }
      context.commit('addToCart', cartItem);
      context.commit('updateTotalItems', cartItem.quantity);
      context.commit('updateTotalCost', cartItem.quantity * cartItem.price);
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
      state.cart.push(payload);
    },
    updateTotalItems(state, payload) {
      state.totalItems += payload;
    },
    updateTotalCost(state, payload) {
      state.totalCost += payload;
    },
    toggleCart(state) {
      state.isOpen = !state.isOpen
    }
  },
  getters: {
    getCart(state) {
      return state.cart;
    },
    cartIsNotEmpty(state) {
      return state.cart && state.cart.length > 0;
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