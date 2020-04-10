import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      { id: 1, name: "cynthia", employed: false },
      { id: 2, name: "Andrew", employed: false },
      { id: 3, name: "Alice", employed: false }
    ]
  },
  mutations: {
    NEWUSER(state, userPerson) {
      let index = state.users.indexOf(userPerson);
      state.users.push({
        id: index,
        name: userPerson,
        employed: false
      });
    },
    DELETEUSER(state, index) {
      state.users.splice(index, 1);
    },
    USERSTATUS(state, user) {
      user.employed = !user.employed;
    }
  }, //used to make adjustments to the state in the store
  actions: {
    addNewUser({ commit }, userPerson) {
      commit("NEWUSER", userPerson);
    },
    deletetheUser({ commit }, index) {
      commit("DELETEUSER", index);
    },
    status({ commit }, user) {
      commit("USERSTATUS", user);
    }
  }, //like methods
  getters: {
    total_employees(state) {
      return state.users.filter(user => user.employed).length;
    },
    get_user: state => id => {
      return state.users.find(user => user.id === id);
    }
  }, //like computed properties
  modules: {}
});
