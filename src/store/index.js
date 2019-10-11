import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    msg: 'ss'
  },
  actions: {
    changeMsg (mss, msg) {
      mss.commit('changeMsg', msg)
    }
  },
  mutations: {
    changeMsg (state, msg) {
      state.msg = msg
    }
  }
})

export default store
