<template>
  <table class="table table-hover">
  <thead class="headtable">
    <tr>
      <th scope="col"></th>
      <th scope="col">Online User</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="player in players" :key="player['.key']" class="table-active tablecontent">
      <td></td>
      <td>{{player.name}}</td>
      <td></td>
    </tr>

  </tbody>
</table>
</template>
<script>

 import {users, rooms } from '../firebase'
 export default {
  name: 'onlineuser',
  firebase: {
    players: users
  }

}
</script>

<style>
  .headtable {
      font-family: 'retro';
      color: aqua;
  }
  .tablecontent{
      font-family: 'retro';
      color: greenyellow;
  }
</style>
