import axios from 'axios'
const githubUrl = 'https://api.github.com'


let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV === 'production') {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET
} else {
    githubClientId = process.env.VUE_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.VUE_APP_GITHUB_CLIENT_SECRET
}
const state = {
    users: [
        {
            id: 1,
            login: 'mojombo',
            avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4"
        },
        {
            id: 2,
            login: 'josiaholatunde',
            avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4"
        },
        {
            id: 3,
            login: 'krizten',
            avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4"
        },
    ]
}


const getters = {
    fetchUsers: state => state.users,
  
}

const mutations = {
    setUsers: (state, payload) => {
        state.users = [...payload]
    }
}

const actions = {
    searchUsers: async ({commit}, filterText) => {
        const response = await axios.get(`${githubUrl}/search/users?q=${filterText}&client_id=${githubClientId}&client_secret=${githubClientSecret}`)
        commit('setUsers', response.data.items);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}