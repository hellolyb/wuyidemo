import { mengxuegu } from './bsurls'
// 登录接口
export const getloginApi = (params: any) =>
  mengxuegu.requsts({
    url: 'user/login',
    method: 'POST',
    params
  })
