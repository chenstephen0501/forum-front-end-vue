import Vue from 'vue'
import Vuex from 'vuex'

import usersAPI from '@/apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
    id: -1,
    name: '',
    email: '',
    image: '',
    isAdmin: false
  },
  isAuthenticated: false,
  token: '',
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser
      }
      state.token = localStorage.getItem('token')
      state.isAuthenticated = true
    },
    revokeAuthentication (state) {
      state.currentUser = {}
      state.isAuthenticated = false
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data, statusText}  = await usersAPI.getCurrentUser()
        console.log('data', data)
        console.log('statusText', statusText)
        if (statusText !== 'OK') {
          throw new Error(statusText)
        }
        const { id, name, email, isAdmin, image } = data
        commit('setCurrentUser', { id, name, email, isAdmin, image })
      } catch (error) {
        console.error('can not fetch user information')
        commit('revokeAuthentication')
        return false
      }
    }
  },
  modules: {}
})