<template>
  <div>
    <h1>Welcome to Braxx</h1>
    <ul>
      <li>
        <router-link :to="{ name: 'name_tournament' }">
          Let's create a new tournament
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeNav',
}
</script>

<style scoped>

</style>
