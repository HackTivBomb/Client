<template>
  <table class="table table-hover">
  <thead class="headtable">
    <tr>
      <th scope="col">No</th>
      <th scope="col"></th>
      <th scope="col">Online User</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr class="table-active tablecontent">
      <th scope="row">1</th>
      <td></td>
      <td>kujaru</td>
      <td></td>
    </tr>
    <tr class="table-active tablecontent">
      <th scope="row">2</th>
      <td></td>
      <td>kainu</td>
      <td></td>
    </tr>
    <tr class="table-active tablecontent">
      <th scope="row">3</th>
      <td></td>
      <td>konan</td>
      <td></td>
    </tr>
  </tbody>
</table>
</template>

<script>
export default {
  name: 'onlineuser'

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
