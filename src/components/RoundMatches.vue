<template>
  <div>
    <ul>
      <li v-for="(match, index) in matches" :key="match.id">
        <Match
          v-bind:match="match"
          v-bind:roundIndex="roundIndex"
          v-bind:matchIndex="index"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Match from "./Match.vue";

export default {
  name: "RoundMatches",
  props: ["matches", "roundIndex"],
  components: {
    Match,
  },
};
</script>

<style scoped></style>
