<template>
  <div >
    <label for="">Name
      <input type="text" v-model="playerName">
    </label>
    <button v-on:click="addNewPlayer(playerName)">Add player</button>
  </div>
</template>

<script>
export default {
  name: 'AddNewPlayer',
  data() {
    return {
      playerName: ''
    }
  },
  methods: {
    addNewPlayer(playerName) {
      const playerObject = {
        name: playerName,
				wins: 0,
				totalWins: 0,
				id: Date.now()
      };

			this.$emit('player-added', playerObject);
			this.playerName = null;
    }
  }
}
</script>

<style scoped>

</style>
