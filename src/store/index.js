import Vue from 'vue'
import Vuex from 'vuex'
import huashi from './huashi'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    huashi
  }
})

export default store
