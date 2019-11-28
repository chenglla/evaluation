import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    msg: 'ss',
    type3Anser: 'ty3'
    // type3Anser: {}
  },
  actions: {
    changeMsg (mss, msg) {
      mss.commit('changeMsg', msg)
    },
    SET_TYPE3_ANSWER (ty3, ans) {
      ty3.commit('SET_TYPE3_ANSWER', ans)
    }
  },
  mutations: {
    changeMsg (state, msg) {
      state.msg = msg
    },
    SET_TYPE3_ANSWER (state, ans) {
      state.type3Anser = ans
    }
    // SET_TYPE3_ANSWER (state, ans) {
    //   state.type3Anser = ans
    // }
  }
})

export default store
