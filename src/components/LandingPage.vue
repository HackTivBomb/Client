<template>
<div class="bg">
  <div class="container btn-go">
    <div @click="signinBtn" class="enjoy-css">I'M READY LET'S GO!</div>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      'signin'
    ]),
    signinBtn () {
      this.signin()
    }
  }
}
</script>

<style scoped>
.bg {
  background-image: url('../assets/retro.gif');
  background-size:  cover;
  background-attachment: fixed;
  width: 100%;
  height: 700px
}

.btn-go {
  display: flex;
  justify-content: center;
  padding-top: 25%;
}

.enjoy-css {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  width: 160px;
  cursor: pointer;
  padding: 9px 20px;
  overflow: hidden;
  border: 1px solid;
  font: normal 19px/1 "Acme", Helvetica, sans-serif;
  color: rgba(0,0,0,1);
  text-align: center;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  background: #ffffff;
  -webkit-box-shadow: 3px 3px 0 0 rgba(0,0,0,0.8) ;
  box-shadow: 3px 3px 0 0 rgba(0,0,0,0.8) ;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.2) ;
}

.enjoy-css:active {
  margin: 3px 0 0 3px;
  -webkit-box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.8) ;
  box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.8) ;
}
</style>
