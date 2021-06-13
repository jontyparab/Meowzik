export default {
  namespaced: true,
  state() {
    return {
      firstColor: '#0353a4',
      secondColor: '#5a189a',
      thirdColor: '#f48c06',
      fourthColor: '#ffffff',
      fifthColor: '#ffffff',
      sixthColor: "#70d900",
      seventhColor: '#ff2c00',
      borderCheck: null,
    }
  },
  mutations: {
    chgTheme(state, payload) {
      state.firstColor = payload.firstColor;
      state.secondColor = payload.secondColor;
      state.thirdColor = payload.thirdColor;
      state.fourthColor = payload.fourthColor;
      state.fifthColor = payload.fifthColor;
      state.sixthColor = payload.sixthColor;
      state.seventhColor = payload.seventhColor;
      state.borderCheck = Boolean(payload.borderCheck);
    },
    // chgfirstColor(state, payload) { state.firstColor = payload.firstColor },
    // chgsecondColor(state, payload) { state.secondColor = payload.secondColor },
    // chgthirdColor(state, payload) { state.thirdColor = payload.thirdColor },
    // chgfourthColor(state, payload) { state.fourthColor = payload.fourthColor },
    // chgfifthColor(state, payload) { state.fifthColor = payload.fifthColor },
    // chgsixthColor(state, payload) { state.sixthColor = payload.sixthColor },
    // chgseventhColor(state, payload) { state.seventhColor = payload.seventhColor },
    // chgborderCheck(state, payload) { state.borderCheck = payload.borderCheck },
  },
  actions: {

    chgTheme(context, payload) {
      let r = document.querySelector('#app');
      // let rs = getComputedStyle(r);
      // alert("The value of --blue is: " + rs.getPropertyValue('--firstColor'));
      for (let key in payload) {
        if (typeof payload[key] == 'string') {
          r.style.setProperty('--' + key, payload[key]);
        }
      }
      context.commit('chgTheme', payload)
    },
    // chgfirstColor(context, payload) { context.commit('chgfirstColor', payload) },
    // chgsecondColor(context, payload) { context.commit('chgsecondColor', payload) },
    // chgthirdColor(context, payload) { context.commit('chgthirdColor', payload) },
    // chgfourthColor(context, payload) { context.commit('chgfourthColor', payload) },
    // chgfifthColor(context, payload) { context.commit('chgfifthColor', payload) },
    // chgsixthColor(context, payload) { context.commit('chgsixthColor', payload) },
    // chgseventhColor(context, payload) { context.commit('chgseventhColor', payload) },
    // chgborderCheck(context, payload) { context.commit('chgborderCheck', payload) },
  },
  getters: {
    colors(state) {
      return {
        firstColor: state.firstColor,
        secondColor: state.secondColor,
        thirdColor: state.thirdColor,
        fourthColor: state.fourthColor,
        fifthColor: state.fifthColor,
        sixthColor: state.sixthColor,
        seventhColor: state.seventhColor,
        borderCheck: state.borderCheck,
      }
    },
    // firstColor(state) { return state.firstColor },
    // secondColor(state) { return state.secondColor },
    // thirdColor(state) { return state.thirdColor },
    // fourthColor(state) { return state.fourthColor },
    // fifthColor(state) { return state.fifthColor },
    // sixthColor(state) { return state.sixthColor },
    // seventhColor(state) { return state.seventhColor },
    // borderCheck(state) { return state.borderCheck },
  }
}