import { mengxuegu } from './bsurls'
// 登录接口
export const getloginApi = (params: any) =>
  mengxuegu.requsts({
    url: 'user/login',
    method: 'POST',
    params
  })
// 用户信息
export const getuserinfo = () =>
  mengxuegu.requsts({
    url: 'user/info/admin',
    method: 'GET'
  })
// 修改密码
export const getRevisePwdApi = (params: object) =>
  mengxuegu.requsts({
    url: 'user/pwd',
    method: 'PUT',
    params
  })
// 退出登录 user/logout
export const getlogoutApi = (params: object) =>
  mengxuegu.requsts({
    url: 'user/logout',
    method: 'POST',
    params
  })
