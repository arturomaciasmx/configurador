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
    selectedMotor: '',
    selectedColor: '',
    selectedInterior: '',
  },
  actions: {
    async getData(context) {
      try {        
        const res = await axios.get('./data/' + this.state.modelParam + '.json') 
        context.commit('currentCarJSON', {data: res.data})
      } catch(e) {
        console.error(e)
      }
    }
  },
  mutations: {
    nextStage(state) {
      state.currentStage++;
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    },
    previousStage(state) {
      state.currentStage--;
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
    setSelectedColor(state, selectedColor) {
      state.selectedColor = selectedColor
    },
    setSelectedInterior(state, selectedInterior) {
      state.selectedInterior = selectedInterior
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
    },
    getSelectedModelKey(state) {
      return state.selectedModel
    },
    getSelectedColor(state) {
      return state.selectedColor
    },
    getSelectedMotor(state) {
      return state.currentJSON.models[state.selectedModel].motors[state.selectedMotor]
    },
    getSelectedInterior(state) {
        return state.selectedInterior
      }
  }
})

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
