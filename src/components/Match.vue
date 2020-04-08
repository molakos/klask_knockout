<template>
  <div>
    <div>
      <div>
        <span :class="{ winner: match.players[0] === match.winner }">
          {{ playerOne ? playerOne.name : "NA" }}
        </span>
        <span @click="increaseSubscore(0)">
          subscore: {{ match.subscores[0] }}</span
        >
        <span> score: {{ match.scores[0] }}</span>
      </div>
      <div>
        <span :class="{ winner: match.players[1] === match.winner }">
          {{ playerTwo ? playerTwo.name : "NA" }}
        </span>
        <span @click="increaseSubscore(1)">
          subscore: {{ match.subscores[1] }}</span
        >
        <span> score: {{ match.scores[1] }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Match",
  props: ["match", "roundIndex", "matchIndex"],
  computed: {
    playerOne() {
      return this.$store.getters.getParticipantById(this.match.players[0]);
    },
    playerTwo() {
      return this.$store.getters.getParticipantById(this.match.players[1]);
    },
  },
  methods: {
    ...mapActions(["updateScores", "updateSubscores"]),
    increaseSubscore(side) {
      let newSubscores = [...this.match.subscores];

      newSubscores[side] += 1;

      this.updateSubscores({
        roundIndex: this.roundIndex,
        matchIndex: this.matchIndex,
        subscores: newSubscores,
        side,
      });
    },
  },
};
</script>

<style scoped>
.winner {
  background-color: hotpink;
}
</style>
