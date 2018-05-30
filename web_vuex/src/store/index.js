/**
 * Created by 23535 on 2018/5/29.
 */
import Vue from 'vue'
import Vuex from 'vuex'

import active from './modules/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    active
  }
})
