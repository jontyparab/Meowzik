export default {
  namespaced: true,
  state() {
    return {
      firstColor: '#083c01',
      secondColor: '#516751',
      thirdColor: '#4b932a',
      fourthColor: '#ffffff',
      fifthColor: '#000000',
      sixthColor: "#70d900",
      seventhColor: '#ff2c00',
      borderCheck: false,
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
  },
  actions: {
    chgTheme(context, payload) {
      let r = document.querySelector('#app');
      // let rs = getComputedStyle(r);
      // alert("The value of --blue is: " + rs.getPropertyValue('--firstColor'));
      localStorage.setItem('theme', JSON.stringify(payload));
      for (let key in payload) {
        if (typeof payload[key] == 'string') {
          r.style.setProperty('--' + key, payload[key]);
        }
      }
      context.commit('chgTheme', payload)
    },
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
  }
}