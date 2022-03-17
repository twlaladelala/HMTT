//基于axios封装网络请求
import axios from 'axios'
import { reject, resolve } from 'core-js/fn/promise'
const axios = theAxios.create({
    baseUrl:'http://toutiao.itheima.net',
    timeout: 20000    //超时时间
})
export default ({url, method = 'GET',params = {}, data = {} ,headers}) =>{
    {
        return axios({
            url,
            method,
            params,
            data,
            headers,
            // success:(res) =>{
            //     resolve(res)
            // },
            // error: err => {
            //     reject(err)
            // }
        })
    }



}