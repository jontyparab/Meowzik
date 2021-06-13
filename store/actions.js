export default {
    currentSong(context, payload) {
        context.commit('currentSong', payload);
    },
    setSongList({ commit }, payload) {
        commit('setSongList', payload);
    },
    appendSongList({ dispatch, commit, getters }, payload) {
        if (!getters.currentSong) {
            dispatch('currentSong', payload[0]);
        }
        commit('appendSongList', payload);
    },
    background(context, payload) {
        context.commit('background', payload);
    }
}