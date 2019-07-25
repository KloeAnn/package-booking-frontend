import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const axios = require('axios');

export default new Vuex.Store({
  state: {
    items:[]
  },
  mutations: {
      getList(state,item){
        state.items.length=0
        state.items.push(...item)
      },
      addItem(state,item){
        state.items.push(item)
      }
  },
  actions: {
    getList (context) {
      axios.get("http://localhost:8100/parcels").then(
        response=>{
          context.commit('getList',response.data)
        }
      ).catch(e=>alert(e))
    },
    addItem(context){
      axios.post("http://localhost:8100/parcels",item).then(
        response=>{
          context.commit('addItem',response.data)
        }
      ).catch(e=>alert(e))
    }
}
})
