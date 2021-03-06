import { createStore } from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'
import themeModule from './theme/index.js'

export default createStore({
  modules: {
    theme: themeModule,
  },
  state() {
    return {
      currentSong: null,
      songList: [
      ],
      background: require('@/assets/images/GrassCat.jpg'),
      backgroundName: 'GrassCat.jpg'
    }
  },
  mutations,
  actions,
  getters,

})
