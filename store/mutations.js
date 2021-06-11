export default {
    currentSong(state, payload) {
        state.currentSong = payload;
    },
    setSongList(state, payload) {
        state.songList.length = 0
        state.songList.push(...payload);
    },
    appendSongList(state, payload) {
        state.songList.push(...payload);
    },

}