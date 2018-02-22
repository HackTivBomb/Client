<template>
  <div>
      <h1 style="font-family:retro">
          WELCOME TO HACK!BOOM!
          {{players.length}}
      </h1>
    <jumbotron/>
    <mainmenu/>
  </div>
</template>

<script>
import navbar from '../components/navbar'
import jumbotron from '../components/welcomeJumbotron.vue'
import mainmenu from '../components/mainmenu.vue'
import {users, rooms } from '../firebase'
import { mapState } from 'vuex';
export default {
  name: 'home',
  components: {
    navbar,
    jumbotron,
    mainmenu
  },
  computed: {
    ...mapState([
      'dataPlayer'
    ])
  },
  firebase: {
      players : users
    }
}
</script>

<style>
@font-face {
    font-family: 'retro' ;
    src: url('../assets/retro.ttf');
}
  .jumbotron {
     color: yellow;
     background-color: inherit;
     margin-bottom: 0%;
  }
</style>
