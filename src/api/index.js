import requests from "./request";
import mockRequest from "./mockRequest";
//三级联动接口
export const reqCategoryList = () => {
    //发请求:返回promise对象
    return requests({ url: "/product/getBaseCategoryList", method: "GET" });
};

export const reqGetBannerList = () => {
    return mockRequest({ url: "/banner", method: "GET" });
};

export const reqGetFloorList = () => {
    // console.log(mockRequest({ url: '/floor', method: 'GET' }))
    return mockRequest({ url: "/floor", method: "GET" });
};

export const reqGetSearchInfo = (params) => {
    return requests({ url: "/list", method: "POST", data: params });
};

export const reqGoodsInfo = (skuId) => {
    return requests({ url: `/item/${skuId}`, method: "GET" })
}

export const reqAddorUpdataShopCart = (skuId, skuNum) => {
    return requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'POST' })
}

export const reqCartList = () => {
    return requests({ url: "/cart/cartList", method: "GET" })
}

export const reqDeleteCart = (skuId) => {
    return requests({ url: `/cart/deleteCart/${skuId}`, method: 'DELETE' })
}

export const reqCheck = (skuId, isCheck) => {
    return requests({ url: `/cart/checkCart/${skuId}/${isCheck}`, method: 'GET' })
}

export const reqPhoneCode = (phone) => {
    return requests({ url: `/user/passport/sendCode/${phone}`, method: 'GET' })
}

export const reqUserRegister = (userInfo) => {
    return requests({ url: "user/passport/register", method: "POST", data: userInfo })
}

export const reqUserLogin = (userInfo) => {
    return requests({ url: "/user/passport/login", method: "POST", data: userInfo })
}

export const reqUserInfo = () => {
    return requests({ url: "/user/passport/auth/getUserInfo", method: "GET" })
}

export const reqUserLogout = () => {
    return requests({ url: "/user/passport/logout", method: "GET" })
}
export const reqAddressInfo = () => {
    return requests({ url: "/user/userAddress/auth/findUserAddressList", method: "GET" })
}
export const reqOrderInfo = () => {
    return requests({ url: "/order/auth/trade", method: "GET" })
}

export const reqSubmitOrder = (tradeNo, tradeInfo) => {
    // console.log(tradeNo, tradeInfo)
    return requests({ url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, method: "POST", data: tradeInfo })
}

export const reqPayInfo = (orderId) => {
    return requests({ url: `/payment/weixin/createNative/${orderId}`, method: "GET" })
}

export const reqPayStatus = (orderId) => {
    return requests({ url: `/payment/weixin/queryPayStatus/${orderId}`, method: "GET" })
}

export const reqMyOrderInfo = (page, limit) => {
    return requests({ url: `/order/auth/${page}/${limit}`, method: "GET" })
}