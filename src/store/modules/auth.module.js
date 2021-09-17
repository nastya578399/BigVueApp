const TOkEN_KEY = 'jwt-token'

export default {
    namespaced: true,
    state() {
        return {
            token: localStorage.getItem(TOkEN_KEY )
        }
    },
    mutations: {
        setToken(state, token) {
            state.token = token
            localStorage.setItem(TOkEN_KEY , token)
        },
        logout(state) {
            state.token = null
            localStorage.removeItem(TOkEN_KEY )
        }
    },
    actions: {
        async login({ commit }, payload) {
            commit('setToken', 'TEST TOKEN')
        }
    },
    getters: {
        token(state) {
            return state.token
        },
        isAuthenticated(_, getters) {
            return !!getters.token //привожу токен к boolean
        }
    }
}