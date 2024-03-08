//配置路由的地方
import Vue from "vue";
import VueRouter from "vue-router";
//使用插件
Vue.use(VueRouter);

let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(
            this,
            location,
            () => { },
            () => { }
        );
    }
};
VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(
            this,
            location,
            () => { },
            () => { }
        );
    }
};

import routes from "./routes";
//暴露
let router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        // ...
        return { y: 0 };
    },
});
import store from "@/store";
router.beforeEach(async (to, from, next) => {
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    if (token) {
        // if (to.path === "/login" || to.path === "/register") {
        //     next("/home");
        next();
    } // } else {
    //     next();
    // }
    else {
        if (to.path === "/trade" || to.path === "/pay" || to.path.startsWith("/center") || to.path === "/shopCart" || to.path === "/paySuccess") {
            next("/login?redirect=" + to.path);
        } else {
            next();
        }
    }
});

export default router;
