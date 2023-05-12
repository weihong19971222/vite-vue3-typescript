import axios from 'axios'
import { getCookie } from 'typescript-cookie'

// https://muki.tw/tech/vue/vite-global-axios-proxy-and-interceptors/
const service = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API
})

service.interceptors.response.use(
    (response) => {
        // 處裡錯誤訊息陣列
        if(response.data.success === false && typeof response.data.msg === 'object'){
            let errorMsg = ''
            Object.values(response.data.msg).forEach((val:any) => {
                errorMsg += val.toString() + '\n'
            });
            response.data.msg = errorMsg
        }
        return response
    },
    (error) => {
        return Promise.reject(error)
    }
)

service.interceptors.request.use(
    (request) => {     
        if(request.url != 'login'){
            const token = getCookie('token')
            request.headers.Authorization = `Bearer ${token}`
        }
        return request
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default service
