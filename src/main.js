import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import store from './store'
import axios from 'axios'
import "swiper/css/swiper.css"
import * as API from '@/api'
// import ElementUI from 'element-ui';
import { Button, MessageBox } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vant, { Lazyload, Loading } from 'vant';
import 'vant/lib/index.css'
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
Vue.use(Vant);
Vue.use(Lazyload, {
  loading: require('@/assets/images/b1.png')
});
Vue.prototype.$axios = axios
Vue.config.productionTip = false

// import '@/mock/mockServe'
require('./mock/mockServe');
import '@/plugins/validate.js'
Vue.config.productionTip = false

Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
Vue.component(Button.name, Button);
// Vue.use(ElementUI);


new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
    Vue.prototype.$msgbox = MessageBox;
    Vue.prototype.$alert = MessageBox.alert;
  },
  router,
  store
}).$mount('#app')
