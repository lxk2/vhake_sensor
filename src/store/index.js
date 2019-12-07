import Vue from 'vue'
import Vuex from 'vuex'
import http from '../request/index'
import { SUCCESS_CODE } from '../request/statusCode'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityList: [],
    cityIndex: 0
  },
  mutations: {
    UP_CITY_LIST: (state, value) => {
      state.cityList = value
    },
    UP_CITY_INDEX: (state, value) => {
      state.cityIndex = value
    }
  },
  actions: {
    getCity: ({ commit }) => {
      return new Promise((resolve, reject) => {
        http.request({
          url: 'Sensor/getCity',
          data: {},
          success: res => {
            if (res.code === SUCCESS_CODE && res.data.length > 0) {
              commit('UP_CITY_LIST', res.data)
              resolve(res.msg)
            } else {
              commit('UP_CITY_LIST', [])
              reject(res.msg)
            }
          }
        })
      })
    },
    changeCityIndex: ({ commit }, index) => {
      commit('UP_CITY_INDEX', index)
    }
  },
  modules: {
  }
})
