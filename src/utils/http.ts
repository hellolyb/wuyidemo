import axios from 'axios'
class Request {
  instance
  constructor(config: any) {
    this.instance = axios.create(config)
    // 局部拦截器
    this.instance.interceptors.request.use(config.interceptors?.request, config.interceptors?.error)
    this.instance.interceptors.response.use(
      config.interceptors?.response,
      config.interceptors?.errors
    )
  }
  requsts(config: any) {
    return new Promise((resolve, reject) => {
      this.instance(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}
export default Request
