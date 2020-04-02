<template>
  <div id="app" class="section">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>



<style>
  @import '~bulma/css/bulma.css';
</style>
