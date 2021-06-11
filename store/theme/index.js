export default {
  state() {
    return {
      firstColor: null,
      secondColor: null,
      thirdColor: null,
      fourthColor: null,
      fifthColor: null,
      sixthColor: null,
      seventhColor: null,
      borderCheck: false,
    }
  },
  mutations: {
    chgfirstColor(state, payload) { state.firstColor = payload.firstColor },
    chgsecondColor(state, payload) { state.secondColor = payload.secondColor },
    chgthirdColor(state, payload) { state.thirdColor = payload.thirdColor },
    chgfourthColor(state, payload) { state.fourthColor = payload.fourthColor },
    chgfifthColor(state, payload) { state.fifthColor = payload.fifthColor },
    chgsixthColor(state, payload) { state.sixthColor = payload.sixthColor },
    chgseventhColor(state, payload) { state.seventhColor = payload.seventhColor },
    chgborderCheck(state, payload) { state.borderCheck = payload.borderCheck },
  },
  actions: {
    chgfirstColor(context, payload) { context.commit('chgfirstColor', payload) },
    chgsecondColor(context, payload) { context.commit('chgsecondColor', payload) },
    chgthirdColor(context, payload) { context.commit('chgthirdColor', payload) },
    chgfourthColor(context, payload) { context.commit('chgfourthColor', payload) },
    chgfifthColor(context, payload) { context.commit('chgfifthColor', payload) },
    chgsixthColor(context, payload) { context.commit('chgsixthColor', payload) },
    chgseventhColor(context, payload) { context.commit('chgseventhColor', payload) },
    chgborderCheck(context, payload) { context.commit('chgborderCheck', payload) },
  },
  getters: {
    firstColor(state) { return state.firstColor },
    secondColor(state) { return state.secondColor },
    thirdColor(state) { return state.thirdColor },
    fourthColor(state) { return state.fourthColor },
    fifthColor(state) { return state.fifthColor },
    sixthColor(state) { return state.sixthColor },
    seventhColor(state) { return state.seventhColor },
    borderCheck(state) { return state.borderCheck },
  }
}