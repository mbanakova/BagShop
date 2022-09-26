export default {
  state: {
    products: [
      {
        id: 'b1',
        title: 'Eco bag',
        color: 'pink',
        img: 'https://farm4.static.flickr.com/3321/3673641227_f8388d7548_o.jpg',
        price: 500,
      },
      {
        id: 'b2',
        title: 'Eco bag',
        color: 'olive',
        img: 'https://farm4.static.flickr.com/3321/3673641227_f8388d7548_o.jpg',
        price: 500,
      },
      {
        id: 'b3',
        title: 'Eco bag',
        color: 'navy',
        img: 'https://farm4.static.flickr.com/3321/3673641227_f8388d7548_o.jpg',
        price: 500,
      },
      {
        id: 'b4',
        title: 'Eco bag',
        color: 'black',
        img: 'https://farm4.static.flickr.com/3321/3673641227_f8388d7548_o.jpg',
        price: 500,
      }]
  },
  actions: {
  },
  mutations: {
    setOffers(state, fetchedOffers) {
      state.offers = fetchedOffers;
    },
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
    hasProducts(state) {
      return (state.products && state.products.length > 0);
    },
    // myOffers(state, getters) {
    //   const userId = getters.userId;
    //   return state.offers.filter(offer => offer.uid === userId)
    // },
  }
}