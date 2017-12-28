import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: 'User ID',
    token: 'Token',
    isLoggedIn: false
  },
  getters: {
    getId: state => {
      return state.id
    },
    getToken: state => {
      return state.token
    },
    getLogged: state => {
      return state.isLoggedIn
    }
  },
  mutations: {
    // called via .commit('mutation')
    mutateId(state, id) {
      state.id = id
    },
    mutateToken(state, token) {
      state.token = token
    },
    mutateLogged(state, logged) {
      // Explicity state whether a user is logged in.
      // Logged will either be T/F.
      state.isLoggedIn = logged
    },
    resetStore(state) {
      state.id = ''
      state.token = ''
      state.isLoggedIn = false
    }
  },
  actions: {
    // called via .dispatch('action')
    updateId({ commit }, id) {
      commit('mutateId', id)
    },
    updateToken({ commit }, token) {
      commit('mutateToken', token)
    },
    updateLogged({ commit }, logged) {
      commit('mutateLogged', logged)
    },
    updateReset({ commit }) {
      commit('resetStore')
    }
  }
})
