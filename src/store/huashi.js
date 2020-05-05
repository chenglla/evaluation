const huashi = {
  state: {
    msg: 'ss',
    type3Anser: 'ty3'
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
  }
}

export default huashi
