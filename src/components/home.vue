<template>
  <div>
      <h1 style="font-family:retro">
          WELCOME TO HACK!BOOM!
      </h1>
    <jumbotron/>
    <PrepareGame/>
    <mainmenu/>
  </div>
</template>

<script>
import navbar from '../components/navbar'
import jumbotron from '../components/welcomeJumbotron.vue'
import mainmenu from '../components/mainmenu.vue'
import PrepareGame from '@/components/PrepareGame'
export default {
  name: 'home',
  components: {
    navbar,
    jumbotron,
    mainmenu,
    PrepareGame
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
