import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'


Vue.use(Vuex) // added vuex on middleware

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

// check token when browser started
const { token } = localStorage;
store.commit('LOGIN', token);

export default store
