<template>
  <div class="row">
    <!-- {{step[0].key}} -->
    <div class="jumbotron viewport col-md-8 offset-md-2 row" style= "width: 720px; height: 350px;">
      <div class="flex">
        <div class="col-md-3 mt-5">
          <div class=" " style="border: ">
            <p>{{room[0].name}}</p>
            <img v-if="room[0].bomb" src="https://vignette.wikia.nocookie.net/clubpenguin/images/9/9a/Smoothie_Smash_Bomb.gif/revision/latest?cb=20120909225634" alt="" style="height:50px; weight:50px;">
            <br>
            <img v-if="step" src="../assets/cat.png" alt="" style="height:100px; weight:100px;">
            <img v-else src="../assets/cat2.png" alt="" style="height:100px; weight:100px;">
            <br>
            <button type="button" name="button" @click="actStep"> STEP</button>
          </div>
        </div>
      </div>


      <div class="flex">
        <div class="col-md-3 mt-1" style="border: ">
          <p>{{room[1].name}}</p>
          <img v-if="room[1].bomb" src="https://vignette.wikia.nocookie.net/clubpenguin/images/9/9a/Smoothie_Smash_Bomb.gif/revision/latest?cb=20120909225634" alt="" style="height:50px; weight:50px;">
          <br>
          <img v-if="step" src="../assets/dog.png" alt="" style="height:100px; weight:100px;">
          <img v-else src="../assets/dog2.png" alt="" style="height:100px; weight:100px;">
          <br>
          <button type="button" name="button" @click="actStep"> STEP</button>
        </div>
      </div>

      <div class="flex">
        <div class="col-md-3 mt-5 offset-md-1" style="border: ">
          <!-- <p>{{room[2].name}}</p> -->
          <p>{{room[0].bomb}}</p>
          <img src="https://vignette.wikia.nocookie.net/clubpenguin/images/9/9a/Smoothie_Smash_Bomb.gif/revision/latest?cb=20120909225634" alt="" style="height:50px; weight:50px; visibility: hidden;">
          <br>
          <img v-if="step" src="../assets/lion.png" alt="" style="height:100px; weight:100px;">
          <img v-else src="../assets/lion2.png" alt="" style="height:100px; weight:100px;">
          <br>
          <button type="button" name="button" @click="actStep">STEP</button>
        </div>
      </div>
        <audio id="myAudio">
          <source src="https://storage.googleapis.com/storageall/dub.ogg" type="audio/ogg">
        </audio>
    </div>
    <div class="modal">
      <div class="modal-dialog" id="modal" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Save changes</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Large modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>

<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <img src="https://media.giphy.com/media/l3vR1tookIhM8nZJu/giphy.gif" alt="">
    </div>
  </div>
</div>
<h1>{{room[0].name}}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { rooms, start } from '../firebase'
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      step: 'true',
      sound: document.getElementById("myAudio")
    }
  },
  firebase: {
    room: rooms,
    step: start
  },
  methods: {
    actStep () {
      this.step = !this.step
      this.playAudio()

    },
    playAudio() {
      console.log(this.sound);
      // sounds = document.getElementById("myAudio")
      this.sound.currentTime = 0.1
      this.sound.play()
      this.sound.currentTime = 0.1
    }
  }
}
</script>

<style lang="css">
.viewport {
  background-image: url('https://i.imgur.com/aTCokPU.gif') !important;
  background-color: red;
  background-size: cover;
  border: 1px solid yellow;
}
.mt-1, .my-1 {
    margin-top: 0.25rem !important;
    margin-left: 5rem;
}
.mt-5, .my-5 {
    margin-top: 3rem !important;
    margin-left: 5rem;
}
</style>
