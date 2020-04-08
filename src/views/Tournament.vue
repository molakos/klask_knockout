<template>
  <div>
    <h1>{{ getTournament.name }}</h1>
    <h2>Let the best win!</h2>
    <TournamentRounds v-bind:rounds="getTournament.rounds" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TournamentRounds from "../components/TournamentRounds";

export default {
  name: "Tournament",
  components: {
    TournamentRounds,
  },
  methods: {},
  computed: {
    ...mapGetters(["getTournament"]),
  },
};
</script>

<style scoped></style>
