import { createStore } from 'vuex';


export const store = createStore({
  state: {
    products: [],
  },
  mutations: {
    setProducts(state, data) {
      state.products = data
    }
  },
  actions: {
    async setProducts(state) {
      fetch('/.netlify/functions/endpoints')
      .then((res) => res.json())
      .then((data) => state.commit('setProducts', data))
      .catch((err) => console.log(err))
    }    
  },
  getters: {
    getProducts: state => state.products
  }
})