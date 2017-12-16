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
    },
    // We will target this as our mutation for actions
    actionChangeState(state) {
      state.testState = 'changeState action was commited'
    }
  },
  actions: {
    // This is one method
    actionState(context) {
      context.commit('actionChangeState')
    },
    // This is the preferred method
    // Pass params like normal...
    actionStateD({ commit }, payload) {
      commit('actionChangeState')
      console.log(payload)
    }
  }
})
