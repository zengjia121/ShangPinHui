import { reqCategoryList, reqGetBannerList, reqGetFloorList } from "@/api"
//home模块的小仓库
const state = {
    categoryList: [],
    BannerList: [],
    FloorList: []
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
        state.categoryList.length = 16
    },
    GetBannerList(state, BannerList) {
        state.BannerList = BannerList
    },
    GetFloorList(state, FloorList) {
        state.FloorList = FloorList
    }
}
const actions = {
    async categoryList({ commit }) {
        let res = await reqCategoryList()
        // console.log(res)
        if (res.code == 200) {
            commit('CATEGORYLIST', res.data)
        }

    },
    async getBannerList({ commit }) {
        // console.log('getBannerList')
        let res = await reqGetBannerList()
        // console.log(res)
        if (res.code == 200) {
            commit('GetBannerList', res.data)
        }

    },
    async getFloorList({ commit }) {
        // console.log('getBannerList')
        let res = await reqGetFloorList()
        // console.log(res)
        if (res.code == 200) {
            commit('GetFloorList', res.data)
        }

    }

}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters,

}