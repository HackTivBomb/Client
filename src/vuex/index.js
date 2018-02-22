import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
// import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    dataPlayer: {}
  },
  mutations: {
    getLogin (state, payload) {
      state.dataPlayer = payload
      console.log(state.dataPlayer, 'ini dataplayer')
    }
  },
  actions: {
    signin ({ commit }) {
      return new Promise((resolve, reject) => {
        const provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope('profile')
        provider.addScope('email')
        firebase.auth().signInWithPopup(provider)
          .then((resultData) => {
            const dataUser = {
              id: resultData.user.uid,
              name: resultData.user.displayName
            }
            console.log(resultData)
            const jsonString = JSON.stringify(dataUser)
            localStorage.setItem('firebase', jsonString)
            commit('getLogin', dataUser)
            resolve()
          })
          .catch(err => console.log(err))
      })
    }
  }
})

export default store
