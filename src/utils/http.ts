import axios from 'axios'
class Request {
  instance
  constructor(config: any) {
    this.instance = axios.create(config)
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
