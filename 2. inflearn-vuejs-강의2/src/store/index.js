import Vue from 'vue'
import Vuex from 'vuex'
import {board} from '../api'

Vue.use(Vuex) // added vuex on middleware

const store = new Vuex.Store({
    state: {
        isAddBoard: false
    },
    mutations: {
        SET_IS_ADD_BOARD (state, toggle) {
            state.isAddBoard = toggle
        }
    },
    actions: {
        ADD_BOARD(_, {title}) {
            return board.create(title);
        }
    }
})

export default store

