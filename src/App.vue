<template>
  <div>
    <div class="nav">
      <router-link class="nav-elem" to="/">Home</router-link>
      <router-link class="nav-elem" to="/leaderboard">Leaderboard</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.nav {
  background-color: $dark-purple;
  padding: $padding-medium;
  display: flex;
  justify-content: center;
  border-bottom: 3px solid $light-purple;
}
.nav-elem {
  color: $white;
  padding: 0 $padding-medium;
}
.nav-elem:hover {
  color: $pink;
}
</style>
