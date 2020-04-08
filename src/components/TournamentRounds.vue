<template>
  <div>
    <ul>
      <li v-for="(round, index) in rounds" :key="index">
        <span
          @click="selectRound(index)"
          :class="{ active: index === selectedRound }"
          >Round {{ index + 1 }}</span
        >
      </li>
      <RoundMatches
        v-bind:matches="rounds[selectedRound]"
        v-bind:roundIndex="selectedRound"
      />
    </ul>
  </div>
</template>

<script>
import RoundMatches from "./RoundMatches";

export default {
  name: "TournamentRounds",
  props: ["rounds"],
  components: {
    RoundMatches,
  },
  data() {
    return {
      selectedRound: 0,
    };
  },
  methods: {
    selectRound(roundIndex) {
      this.selectedRound = roundIndex;
    },
  },
};
</script>

<style scoped>
.active {
  background-color: greenyellow;
}
</style>
