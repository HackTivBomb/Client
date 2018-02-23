<template>
  <div class="jumbotron">
  <p class="lead">
    <!-- <input v-model="roomname" type="text" name="" placeholder="input room name !"> -->
    Player Joined: {{rooms.length}}<a v-if="rooms.length == 2" @click="startGame" class="btn btn-primary btn-lg" style="font-family: retro" href="#" role="button">START GAME</a>
    <a v-else @click.prevent="enterRoom" class="btn btn-primary btn-lg" style="font-family: retro" href="#" role="button">ENTER ROOM</a>
  </p>
  {{start}}
</div>
</template>

<script>
import {rooms, start} from '../firebase'
export default {
  name: 'welcomeJumbotron',
  data () {
    return {
      roomname: '',
      playerjoin: localStorage.getItem('pj')
    }
  },
  firebase: {
    rooms: rooms,
    start: start
  },
  watch: {
    playerjoin: function() {
      console.log(this.playerjoin);
      if (this.playerjoin == '2') {
        alert('yes')
      } else {
        alert('no')
      }
    }
  },
  methods : {
    addroom () {
      rooms.push({
        room : this.roomname
      }).then(() => {
        this.roomname = ''
      } )
    },
    enterRoom () {
      console.log('ini aapapa',this.rooms)
      let user = JSON.parse(localStorage.getItem('firebase'))
      user.bom = false
      user.step = 0
      console.log(user)
      rooms.child(user.id).set(user)
      localStorage.setItem('pj', this.rooms.length)
    },
    startGame () {
      start.set({status:true})
      this.playerjoin = this.rooms.length;
      console.log(this.playerjoin);
      this.$router.push('/room')
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
