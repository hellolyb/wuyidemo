import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // 登录返回密匙
  const token = 0
  const username = ''
  return { token, username }
})
