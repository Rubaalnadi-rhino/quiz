import { createStore } from 'vuex'
import  auth  from "./modules/authentication";
import quiz from "./modules/quiz"
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    quiz
  }
})
