import axios from 'axios'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'

//请求拦截器
const requests = axios.create({
    baseURL: "http://gmall-h5-api.atguigu.cn/api",
    timeout: 5000
})

requests.interceptors.request.use((config) => {
    //进度条开始动
    if (store.state.detail.uuid_token) {
        config.headers.userTempId = store.state.detail.uuid_token
    }
    if (store.state.user.token) {
        config.headers.token = store.state.user.token
    }
    nProgress.start();
    return config
})

//响应拦截器
requests.interceptors.response.use((res) => {
    nProgress.done();
    return res.data;
}, (error) => {
    return Promise.reject(new Error(error.Error))
})

export default requests