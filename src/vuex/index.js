import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import router from '../router'
import { users } from '../firebase'
// import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    dataPlayer: {},
    isLogin: false,
    idroom: null
  },
  mutations: {
    getLogin (state, payload) {
      let self =  this
      state.dataPlayer = payload
      console.log(state.dataPlayer.id, 'ini dataplayer')
      let user = JSON.parse(localStorage.getItem('firebase'))
      users.child(user.id).set({
        name: user.name,
        image: user.image
      })
      router.push('home')
    },
    setLogin (state, payload) {
      state.isLogin = payload
      console.log(state.isLogin, 'set logiiin')
    }
  },
  actions: {
    signin ({ commit }) {
      const provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope('profile')
      provider.addScope('email')
      firebase.auth().signInWithPopup(provider)
        .then((response) => {
          let objUser = {
            id: response.user.uid,
            name: response.user.displayName,
            image: response.user.photoURL
          }
          console.log(this,'ini di indx')
          let jsonString = JSON.stringify(objUser)
          localStorage.setItem('firebase', jsonString)
          commit('getLogin', objUser)
          // window.location('/home')
        })
        .catch(err => console.log(err))
    },
    checkLogin ({ commit }) {
      if (localStorage.getItem('firebase')) {
        commit('setLogin', true)
      }
    }
  }
})

export default store
