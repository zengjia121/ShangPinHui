
import { reqPhoneCode, reqUserRegister, reqUserLogin, reqUserInfo, reqUserLogout } from '@/api'
const state = {
  phoneCode: '',
  token: localStorage.getItem('TOKEN_KEY') || '',
  userInfo: {}
}
const mutations = {
  GET_PHONE_CODE(state, phoneCode) {
    state.phoneCode = phoneCode
  },
  GET_TOKEN(state, token) {
    state.token = token
  },
  UserInfo(state, userInfo) {
    state.userInfo = userInfo
  },
  USER_LOGOUT(state) {
    state.token = '';
    localStorage.removeItem('TOKEN_KEY')
    state.userInfo = {};

  }
}
const actions = {
  async getUserInfo({ commit }) {
    let res = await reqUserInfo()
    if (res.code === 200) {
      commit('UserInfo', res.data)
      return "ok"
    } else {
      return Promise.reject(new Error('failed'))
    }
  },
  async getPhoneCode({ commit }, phone) {
    let res = await reqPhoneCode(phone)
    if (res.code === 200) {
      commit('GET_PHONE_CODE', res.data)
      return "ok"
    } else {
      return Promise.reject(new Error('failed'))
    }
  },
  async userReigster({ commit }, userInfo) {
    let res = await reqUserRegister(userInfo)
    console.log(res)
    if (res.code === 200 || res.code === 223) {
      return "ok"
    } else {
      return Promise.reject(new Error('failed'))
    }
  },
  async getUserLogin({ commit }, userInfo) {
    let res = await reqUserLogin(userInfo)
    console.log(res.data)
    if (res.code === 200) {
      commit('GET_TOKEN', res.data.token)
      localStorage.setItem("TOKEN_KEY", res.data.token)
      return "ok"
    }
  },
  async getUserLogout({ commit }) {
    let res = await reqUserLogout()
    if (res.code === 200) {
      commit('USER_LOGOUT')
      return "ok"
    } else {
      return Promise.reject(new Error('failed'))
    }
  }
}
const getters = {
  phoneCode(state) {
    return state.phoneCode
  },
  userInfo(state) {
    return state.userInfo
  },
}
export default {
  state,
  mutations,
  actions,
  getters,
};