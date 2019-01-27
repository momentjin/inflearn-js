import Vue from 'vue'
import Vuex from 'vuex'
import {
  board
} from '../api'

Vue.use(Vuex) // added vuex on middleware

const store = new Vuex.Store({
  state: {
    isAddBoard: false,
    boards: []
  },
  // 상태 변이 함수 정의 (only 동기)
  mutations: {
    SET_IS_ADD_BOARD(state, toggle) {
      state.isAddBoard = toggle
    },
    SET_BOARDS(state, boards) {
      state.boards = boards
    }
  },
  // 비동기 액션 정의
  actions: {
    ADD_BOARD(_, {title}) {
      return board.create(title);
    },
    FETCH_BOARDS ({commit}) {
        return board.fetch().then(data => {
                commit('SET_BOARDS', data.list)
        })
    }

  }
})

export default store
