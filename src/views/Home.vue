<template>
  <div class="home">
    <HomeNav msg="Welcome"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeNav from '@/components/HomeNav.vue'

export default {
  name: 'Home',
  components: {
    HomeNav
  }
}
</script>
