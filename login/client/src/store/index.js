import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: 'User ID',
    token: 'Token'
  },
  getters: {
    getId: state => {
      return state.id
    },
    tokenId: state => {
      return state.token
    }
  },
  mutations: {
    // called via .commit('mutation')
    mutateId(state, id) {
      state.id = id
    },
    mutateToken(state, token) {
      state.token = token
    }
  },
  actions: {
    // called via .dispatch('action')
    updateId({ commit }, id) {
      commit('mutateId', id)
    },
    updateToken({ commit }, token) {
      commit('mutateToken', token)
    }
  }
})
