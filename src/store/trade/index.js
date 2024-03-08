import { reqAddressInfo, reqOrderInfo } from '@/api'
const state = {
  address: {},
  orderInfo: {}

}
const mutations = {
  GETADDRESS(state, address) {
    state.address = address
  },
  GETORDER(state, order) {
    state.orderInfo = order
  }
}
const actions = {
  async getAddressInfo({ commit }) {
    const result = await reqAddressInfo()
    if (result.code === 200) {
      commit('GETADDRESS', result.data)
      // console.log(result.data)
    }
  },
  async getOrderInfo({ commit }) {
    const result = await reqOrderInfo()
    if (result.code === 200) {
      commit('GETORDER', result.data)
      // console.log(result.data)
    }
  }
}
const getters = {
  AddressInfo(state) {
    return state.address || {}
  },
  OrderInfo(state) {
    return state.orderInfo || {}

  }
}

export default {
  state,
  mutations,
  actions,
  getters,
};