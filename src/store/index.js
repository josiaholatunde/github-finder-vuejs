import Vue from 'vue';
import Vuex from 'vuex'
import users from './modules/users'


//load Vuex

Vue.use(Vuex);

//Create Store
const store = new Vuex.Store({
    modules: {
        users
    }
});

export default store;