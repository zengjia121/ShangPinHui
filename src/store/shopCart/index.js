import { reqCartList, reqDeleteCart, reqCheck } from "@/api";
//search模块的小仓库
const state = {
  shopCartList: []
};
const mutations = {
  shopCartList(state, shopCartList) {
    state.shopCartList = shopCartList || {}
  }
};
const actions = {
  async getCartList({ commit }) {
    let res = await reqCartList()
    // console.log(res.data)
    if (res.code === 200) {
      commit('shopCartList', res.data)
    }
  },
  async deleteCart({ commit }, skuId) {
    let res = await reqDeleteCart(skuId);
    if (res.code === 200) {
      return "ok"
    } else {
      return Promise.reject(new Error('failed'))
    }
  },
  async changeCheck({ commit }, { skuId, isChecked }) {
    let res = await reqCheck(skuId, isChecked)
    console.log(res)
    if (res.code === 200) {
      return "ok"
    } else {
      return Promise.reject(new Error('failed'))
    }
  }
};
const getters = {
  cartInfoList(state) {
    return (state.shopCartList[0] && state.shopCartList[0].cartInfoList) || [];
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
};
