import Vue from 'vue'
import Vuex from 'vuex'
import inventory from './modules/inventory'

Vue.use(VueX);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    inventory,
  },
});
