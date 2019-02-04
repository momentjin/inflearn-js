import * as api from '../api'

// 상태 변이 함수 정의 (only 동기)
// 변이 함수는 state를 인자로 받음
const mutations = {
  SET_IS_ADD_BOARD(state, toggle) {
    state.isAddBoard = toggle
  },
  SET_BOARDS(state, boards) {
    state.boards = boards
  },
  SET_BOARD(state, board) {
    state.board = board
  },
  SET_CARD(state, card) {
    state.card = card
  },
  SET_THEME(state, color) {
    state.bodyColor = color || '#ffffff';
    state.navbarColor = color ? 'rgba(0,0,0,.15)' : '#026aa7';
  },
  LOGIN(state, token) {
    if (!token) return;
    state.token = token;
    localStorage.setItem('token', token);
    api.setAuthInHeader(token);
  },
  LOGOUT(state) {
    state.token = null
    delete localStorage.token;
    api.setAuthInHeader(null)
  }
}

export default mutations;
