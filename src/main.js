import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    modelParam: new URL(location.href).searchParams.get('mdc'),
    currentJSON: {},
    currentStage: 1,
    selectedModel: '',
    selectedMotor: ''
  },
  actions: {
    async getData(context) {
      try {        
        const res = await axios.get('/data/' + this.state.modelParam + '.json') 
        context.commit('currentCarJSON', {data: res.data})
      } catch(e) {
        console.error(e)
      }
    }
  },
  mutations: {
    nextStage(state) {
      state.currentStage++;
    },
    currentCarJSON(state, {data}) {
      console.log(data);
      state.currentJSON = data;
    },
    setSelectedModel(state, selectedModel) {
      state.selectedModel = selectedModel
    },
    setSelectedMotor(state, selectedMotor) {
      state.selectedMotor = selectedMotor
    },
  },
  getters: {
    getCurrentStage(state) {
      return state.currentStage
    },
    getCurrentCarJSON(state) {      
      return state.currentJSON
    },
    getModelParam(state) {
      return state.modelParam;
    },
    getSelectedModel(state) {
      return state.currentJSON.models[state.selectedModel]
    }
  }
})

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
