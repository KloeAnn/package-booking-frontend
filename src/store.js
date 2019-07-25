import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const axios = require('axios');

export default new Vuex.Store({
  state: {
    items:[{
      id:1,
      name:"lisi",
      telephone:"123456",
      status:"1",
      gettingTime:"111"
    },
      {
        id:1,
        name:"lisi",
        telephone:"123456",
        status:"1",
        gettingTime:"111"
      }]
  },
  mutations: {
      addItems(state,item){
        state.items.add(item)
      }
  },
  actions: {
    axios.get('/user?ID=12345')
      .then(response=> {
        getitems(context){
          context.commit('addItems',response.data)
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
}
})
