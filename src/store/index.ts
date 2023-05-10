import { createStore } from 'vuex'
import errorPromptMsg from './modules/errorPromptMsg'

export default createStore({
  modules: {
    errorPromptMsg
  }
})