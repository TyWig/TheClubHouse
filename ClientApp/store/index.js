import Vue from 'vue'
import Vuex from 'vuex'
import ApiService from '../store/api'

Vue.use(Vuex)

// TYPES
const MAIN_SET_COUNTER = 'MAIN_SET_COUNTER'
const MAIN_SET_USER = 'MAIN_SET_USER'
const MAIN_SET_EVENTS = 'MAIN_SET_EVENTS'
const MAIN_SET_AUTH = 'MAIN_SET_AUTH'

// STATE
const state = {
  counter: 0,
  user: {},
  isAuthenticated: false,
  events: []
}

// MUTATIONS
const mutations = {
  [MAIN_SET_COUNTER] (state, obj) {
    state.counter = obj.counter
  },
  [MAIN_SET_USER] (state, obj) {
    state.user = { ...state.user, ...obj.user }
  },
  [MAIN_SET_EVENTS] (state, obj) {
    state.events = [ ...state.events, ...obj.events ]
  },
  [MAIN_SET_AUTH] (state, obj) {
    state.isAuthenticated = obj;
  }
}

// ACTIONS
const actions = ({
  setCounter ({ commit }, obj) {
    commit(MAIN_SET_COUNTER, obj)
  },
  setUser ({ commit }, obj) {
    commit(MAIN_SET_USER, obj)
  },
  getEvents ({ commit }) {
    ApiService.getEvents().then(response => {
      if(response.data) {
        commit(MAIN_SET_EVENTS, {events: response.data});
      }
      return response;
    });
  },
  setAuth({ commit }, val) {
    commit(MAIN_SET_AUTH, val);
  }
})

export default new Vuex.Store({
  state,
  mutations,
  actions
})
