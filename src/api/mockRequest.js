import axios from 'axios'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'

//请求拦截器
const requests = axios.create({
    baseURL: "/mock",
    timeout: 5000
})
requests.interceptors.request.use((config) => {
    //进度条开始动
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