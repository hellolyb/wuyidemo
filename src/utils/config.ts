import { ElLoading } from 'element-plus'
let loadingInstance: any
export const config = {
  baseURL: 'http://vue.mengxuegu.com/pro-api',
  timeout: 10000,
  interceptors: {
    request: (config: any) => {
      // 在发送请求之前做些什么
      loadingInstance = ElLoading.service({
        text: '拼命加载中...',
        background: 'rgba(100, 156, 137, 0.7)'
      })
      return config
    },
    error: (err: any) => {
      // 对请求错误做些什么
      loadingInstance.close()
      return Promise.reject(err)
    },
    response: (response: any) => {
      // 对响应数据做点什么
      loadingInstance.close()
      return response
    },
    errors: (err: any) => {
      // 对响应错误做点什么
      loadingInstance.close()
      return Promise.reject(err)
    }
  }
}
