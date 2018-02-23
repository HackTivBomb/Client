<template>
  <div class="container" >
  <div class="row ustify-content-center">
    <div class="col-md">
        <div class="profile">
            <p>Hello... !</p>
            <div class="card">
            <img :src="dataPlayer.image" style="height:400px">
            <div class="container">
            <h4><p>{{dataPlayer.name}}</p></h4>
            <p>Architect & Engineer</p>
            </div>
        </div>
        </div>
    </div>
    <!-- <div class="col-md">
        <div class="playboard">
            <p>wanna play?</p>
            <ul>
                <li v-for="(room,idx) of rooms" :key="room['.key']">
                    <p>Room Name: {{room.room}}</p>
                    <button @click="joinroom(room['.key'],idx)" >join</button>
                </li>
            </ul>
        </div>
    </div> -->
    <div class="col-md">
       <onlineuser/>
    </div>
  </div>
</div>
</template>

<script>
import onlineuser from '../components/onlineuser.vue'
import { mapState } from 'vuex';
import { rooms } from '../firebase'
export default {
  name: 'mainMenu',
  components: {
    onlineuser
  },
  data () {
      return {
          roomceker : '',
      }
  },
  computed:{
      ...mapState([
          'dataPlayer',
          'idroom'
      ])
  },
  firebase: {
      rooms : rooms,
      
  },
  methods : {
      joinroom (key,e) {
          console.log(e,'ininin')
          let a =  this.rooms.filter((x,idx) => idx == e)
          console.log('aaaa',a['.key'])
          if(e < 4 ){
              console.log('masukkkkk')
             let id = JSON.parse(localStorage.getItem('firebase')).id
             let name = JSON.parse(localStorage.getItem('firebase')).name
             rooms.child(key).child(id).set({player: name,bom:false})
             localStorage.setItem('idroom',key)
             this.$router.push(`/room/${key}`)
          }else {
              alert('penuuhh ciy')
          }
        //   console.log('ini cek oom',cekroom)
      }
  }
}
</script>

<style>
@font-face {
    font-family: 'retro' ;
    src: url('../assets/retro.ttf');
}
  ul {
    list-style: none;
  }
  .boardprev {
      background-color:white;
      height:20em;
      width:50em;
      border-radius:20px;
  }
  .col-md{
      padding: 10px;
  }
  p{  font-family: 'retro';
      color: red;
  }
 .playboard {
     border-radius: 20px;
     height: 40em;
     background-color: black;
 }
 .profile {
     margin: auto;
     width: 25em;
     border-radius: 20px;
     height: 40em;
     background-color: whitesmoke;
 }
 .onlineuser {
     padding: auto;
     color: yellow;
 }

 .card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

/* Add some padding inside the card container */
.container {
    padding: 2px 16px;
}
</style>
