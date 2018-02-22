<template>
  <div class="container" >
  <div class="row ustify-content-center">
    <div class="col-md">
        <div class="profile">
            <p>Hello... !</p>
            <div class="card">
            <img src="https://tekno.makobar.com/wp-content/uploads/sites/3/2017/11/Super-Mario.jpg" alt="Avatar" style="width:100%">
            <div class="container">
            <h4><p>Kizaru</p></h4>
            <p>Architect & Engineer</p>
            </div>
        </div>
        </div>
    </div>
    <div class="col-md">
        <div class="playboard">
            <p>wanna play?</p>
            <div class="row">
                <div class="col-md-10">
                    <div class="boardprev">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md">
       <onlineuser/>
    </div>
  </div>
</div>
</template>

<script>
import onlineuser from '../components/onlineuser.vue'
export default {
  name: 'mainMenu',
  components: {
    onlineuser
  }

}
</script>

<style>
@font-face {
    font-family: 'retro' ;
    src: url('../assets/retro.ttf');
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
