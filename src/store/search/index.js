import { reqGetSearchInfo } from "@/api";
//search模块的小仓库
const state = {
    SearchList: {},
};
const mutations = {
    SearchList(state, SearchList) {
        state.SearchList = SearchList;
    },
};
const actions = {
    async getSearchList({ commit }, params = {}) {
        let res = await reqGetSearchInfo(params);
        // console.log(res)
        if (res.code == 200) {
            commit("SearchList", res.data);
        }
    },
};
const getters = {
    goodsList(state) {
        return state.SearchList.goodsList || [];
    },
    trademarkList(state) {
        return state.SearchList.trademarkList || [];
    },
    attrsList(state) {
        return state.SearchList.attrsList || [];
    },
    total(state) {
        return state.SearchList.total || [];
    },
    PageSize(state) {
        return state.SearchList.pageSize || [];
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};
