// 个人登录信息

import { defineStore } from 'pinia';
import Cookies from 'js-cookie';
import { USER_TOKEN } from '../code';

interface TypeUsers {
  token: string
}

export const userStore = defineStore({
  id: 'user',
  state: (): TypeUsers => {
    return {
      token: '123'
    }
  },
  getters: {},
  actions: {
    // 登录
    LoginUser(datas: string) {
      return new Promise<void>((res) => {
        Cookies.set(USER_TOKEN, datas)
        res()
      })
    },
    // 退出
    logoutUser() {
      return new Promise<void>((resolve) => {
        Cookies.remove(USER_TOKEN)
        resolve()
      })
    }
  }
})
