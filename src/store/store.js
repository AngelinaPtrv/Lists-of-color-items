import Vue from 'vue';
import Vuex from 'vuex';
import state from '@/store/state';
import actions from '@/store/actions';
import mutations from '@/store/mutations';
import getters from '@/store/getters';

Vue.use(Vuex);

const store = new Vuex.Store ({
  state,
  mutations,
  getters,
  actions
})

export default store;