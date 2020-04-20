<template>
  <div class="container">
    <h1>Klask Tournament Dashboard</h1>
    <ul>
      <li>
        <router-link class="option-text" :to="{ name: 'name_tournament' }"
          >Let's create a new tournament</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeNav",
};
</script>

<style scoped lang="scss">
.option-text {
  text-transform: uppercase;
  font-weight: 700;
  color: $dark-purple;
}
.option-text:hover {
  color: $light-purple;
}
</style>
