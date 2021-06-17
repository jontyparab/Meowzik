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
        localStorage.setItem('background', payload)
        context.commit('background', payload);
    },
    backgroundName(context, payload) {
        localStorage.setItem('backgroundName', payload)
        context.commit('backgroundName', payload);
    },
    setCustomizations({ dispatch }) {
        const background = localStorage.getItem('background')
        const backgroundName = localStorage.getItem('backgroundName')
        const theme = JSON.parse(localStorage.getItem('theme'))
        if (background && backgroundName) {
            dispatch('backgroundName', backgroundName)
            dispatch('background', background)
        }
        if (theme) {
            dispatch('theme/chgTheme', theme, { root: true })
        }
    }
}