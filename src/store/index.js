import Vuex from 'vuex'
import Vue from 'vue'
import instagram from './modules/instagram'
import twitter from './modules/twitter'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        instagram,
        twitter
    }
})