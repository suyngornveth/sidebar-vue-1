<template>
  <div class="app">

    <!-- SIDEBAR -->
    <Sidebar></Sidebar>

    <!-- ROUTER -->
    <router-view></router-view>

  </div>

</template>

<script setup>
import Sidebar from './components/Sidebar.vue'

</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Source Sans Pro', sans-serif;
}

body {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
}

.container{
  position: absolute;
  height: 100%;
  margin: 12px;
}

</style>

