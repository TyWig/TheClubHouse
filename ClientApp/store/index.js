import Vue from 'vue'
import Vuex from 'vuex'
import { User } from './models/user'

Vue.use(Vuex)

// TYPES
const MAIN_SET_COUNTER = 'MAIN_SET_COUNTER'
const MAIN_SET_USER = 'MAIN_SET_USER'

// STATE
const state = {
  counter: 0,
  user: User,
  isAuthenticated: true,
  calendarConfig: {
    themeSystem: 'bootstrap4',
    defaultView: 'month',
    header: {
      left: 'prev,next, today',
      center: 'title',
      right: 'month'
    }
  }
}

// MUTATIONS
const mutations = {
  [MAIN_SET_COUNTER] (state, obj) {
    state.counter = obj.counter
  },
  [MAIN_SET_USER] (state, obj) {
    state.user = { ...state.user, ...obj.user }
  }
}

// ACTIONS
const actions = ({
  setCounter ({ commit }, obj) {
    commit(MAIN_SET_COUNTER, obj)
  },
  setUser ({ commit }, obj) {
    commit(MAIN_SET_USER, obj)
  }
})

export default new Vuex.Store({
  state,
  mutations,
  actions
})
