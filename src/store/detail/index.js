import { reqGoodsInfo, reqAddorUpdataShopCart } from "@/api";
import { getUUID } from '@/utils/uuid_token'
//search模块的小仓库
const state = {
  GoodsInfo: {},
  uuid_token: getUUID()
};
const mutations = {
  GoodsInfo(state, GoodsInfo) {
    state.GoodsInfo = GoodsInfo;
  },
};
const actions = {
  async getGoodsInfo({ commit }, skuId = {}) {
    let res = await reqGoodsInfo(skuId);
    // console.log(res)
    if (res.code == 200) {
      commit("GoodsInfo", res.data);
    }
  },
  async addorUpdataShopCart({ commit }, { skuId, skuNum }) {
    let res = await reqAddorUpdataShopCart(skuId, skuNum)
    return res.code === 200 ? 'ok' : Promise.reject(new Error('fail'))
  }
};
const getters = {
  categoryView(state) {
    return state.GoodsInfo.categoryView || {}
  },
  skuInfo(state) {
    return state.GoodsInfo.skuInfo || {}
  },
  spuSaleAttrList(state) {
    return state.GoodsInfo.spuSaleAttrList || {}
  }

};

export default {
  state,
  mutations,
  actions,
  getters,
};
