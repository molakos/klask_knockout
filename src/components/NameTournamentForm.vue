<template>
  <div class="content-box">
    <form class="content-form" @submit="submit">
      <StyledInput
        v-model="tournamentName"
        v-bind:forId="'tournament-name'"
        v-bind:label="'Name your tournament'"
      />
      <button class="btn" type="submit" :disabled="!tournamentName.length">Proceed</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import StyledInput from "../common/StyledInput";

export default {
  name: "NameTournamentForm",
  components: {
    StyledInput
  },
  data() {
    return {
      tournamentName: ""
    };
  },
  methods: {
    ...mapActions(["nameTournament"]),
    submit() {
      this.nameTournament(this.tournamentName);
      this.$router.push({ name: "add_players" });
      this.tournamentName = "";
    }
  }
};
</script>

<style scoped lang="scss"></style>
