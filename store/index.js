import { createStore } from 'vuex'
import actions from './actions.js'
import mutations from './mutations.js'
import getters from './getters.js'
// import Song from '../models/SongModel.js'
import themeModule from './theme/index.js'

export default createStore({
  modules: {
    theme: themeModule,
  },
  state() {
    return {
      currentSong: null,
      // volume: 50,
      // repeat: false,
      // loopQueue: false,
      // shuffle: false,

      songList: [
        { name: "Kimino Shiranai Monogatari - Copyasfnsodfoi23423434 23333333333333333333333333333333333333333333333", id: 1 },
      ],
    }
  },
  mutations,
  actions,
  getters,

})
