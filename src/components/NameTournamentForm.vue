<template>
  <form @submit="submit">
    <label for="tournament-name">
      Name your tournament
    </label>
    <input
      id="tournament-name"
      v-model="value"
      autocomplete="off"
      placeholder="e.g. Total Elimination">
      <button
        type="submit"
        :disabled="!value.length">
        Proceed
      </button>
  </form>
</template>

<script>
import { mapActions } from "vuex"

export default {
	name: 'NameTournamentForm',
	data() {
		return {
			value: ''
		}
	},
	methods: {
		...mapActions(['nameTournament']),
		submit() {
			this.nameTournament(this.value)
			this.$router.push({name: 'add_players'})
			this.value = '';
		}
	}
}
</script>

<style scoped>

</style>
