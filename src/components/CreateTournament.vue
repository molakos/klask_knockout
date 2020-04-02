<template>
  <div >
    <AddNewPlayer v-on:player-added="addPlayer"/>
    <Players v-bind:players="players"/>
  </div>
</template>

<script>
import AddNewPlayer  from "./AddNewPlayer";
import Players  from "./Players";

export default {
  
  name: 'CreateTournament',
  components: {
    AddNewPlayer,
    Players
  },
  data() {
    return {
      players: []
    }
  },
  methods: {
    addPlayer(player) {
      this.players = [...this.players, player];
      // window.localStorage.setItem('klaskl_players', JSON.stringify(this.players));
    }
  }
}
</script>

<style scoped>

</style>
