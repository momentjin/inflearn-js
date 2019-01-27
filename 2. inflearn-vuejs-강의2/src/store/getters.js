// getter는 기본적으로 state를 인자로 받음
const getters = {
  isAuth(state) {
    return !!state.token
  }
}

export default getters;
