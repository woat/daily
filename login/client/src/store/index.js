import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    testState: 'We are testing the state'
  },
  getters: {
    testGetter: state => {
      return state.testState
    },
    testGetterParam: (state) => (param) => {
      return state.testState + param
    }
  },
  mutations: {
    changeState(state) {
      state.testState = 'changeState mutation happened.'
    },
    // Use object as payload to as it can contain multiple fields
    changeStateWithPayload(state, payload) {
      state.testState = payload.text
    }
  }
})
