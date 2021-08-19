import axios from 'axios'

export default {
    namespaced: true,
	state: {
        token: null,
        user: null
    },

    getters: {
        authenticated(state) {
            return state.token && state.user
        },

        user(state) {
            return state.user
        }
    },
    
	mutations: {
		SET_TOKEN(state, token) {
            state.token = token
        },

        SET_USER(state, user) {
            state.user = user
        }
    },
    
	actions: {
        async register({ dispatch }, credentials) {
            let response = await axios.post('v1/auth/register', credentials);

            return dispatch('attempt', response.data.body);
        },

		async logIn({ dispatch }, credentials) {
            let response = await axios.post('v1/auth/login', credentials)

            return dispatch('attempt', response.data.body)
        },

        async attempt({ commit, state }, token) {
            if(token) {
                commit('SET_TOKEN', token)
            }

            if(!state.token) {
                return
            }

            try {
                let response = await axios.get('v1/user');

                commit('SET_USER', response.data.body)
            } catch (err) {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        },

        logOut({ commit }) {
            commit('SET_TOKEN', null)
            return commit('SET_USER', null)
        },

        async refresh({ commit }) {
            try {
                let response = await axios.get('v1/user');

                commit('SET_USER', response.data.body)
            } catch (err) {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        }
	}
}
