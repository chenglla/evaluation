import Vue from 'vue'
import Vuex from 'vuex'
// import app from './modules/app'
// import errorLog from './modules/errorLog'
// import permission from './modules/permission'
// import tagsView from './modules/tagsView'
// import user from './modules/user'
// import getters from './getters'

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
  // modules: {
  //   app,
  //   errorLog,
  //   permission,
  //   tagsView,
  //   user
  // },
  // getters
})

export default store