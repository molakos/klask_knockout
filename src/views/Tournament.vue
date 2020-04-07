<template>
  <div>
    <h1>{{ getTournament.name }}</h1>
    <h2>Let the best win!</h2>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Tournament",
  methods: {},
  computed: {
    ...mapGetters(["getTournament"]),
  },
};
</script>
