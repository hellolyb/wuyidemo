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
// 会员管理列表/member/list/search/1/20
export const getmemberApi = () =>
  mengxuegu.requsts({
    url: '/member/list/search/1/20',
    method: 'POST'
  })
// 供应商列表 supplier/list/search/1/10
export const getsupplierApi = () =>
  mengxuegu.requsts({
    url: 'supplier/list/search/1/10',
    method: 'POST'
  })
// 商品管理列表 goods/list/search/1/10
export const getgoodsApi = () =>
  mengxuegu.requsts({
    url: 'goods/list/search/1/10',
    method: 'POST'
  })
// 员工管理 staff/list/search/1/10
export const getstaffApi = () =>
  mengxuegu.requsts({
    url: 'staff/list/search/1/10',
    method: 'POST'
  })
