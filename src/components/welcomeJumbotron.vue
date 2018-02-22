<template>
  <div class="jumbotron">
  <p class="lead">
    <input v-model="roomname" type="text" name="" placeholder="input room name !">
    <a @click.prevent="addroom" class="btn btn-primary btn-lg" style="font-family: retro" href="#" role="button">Create Room</a>
  </p>
</div>
</template>

<script>
import {rooms} from '../firebase'
export default {
  name: 'welcomeJumbotron',
  data () {
    return {
      roomname: ''
    }
  },
  methods : {
    addroom () {
      rooms.push({
        room : this.roomname
      }).then(() => {
        this.roomname = ''
      } )
    }
  }
}
</script>

<style>
@font-face {
    font-family: 'retro' ;
    src: url('../assets/retro.ttf');
}
</style>
