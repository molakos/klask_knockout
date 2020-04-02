<template>
  <div class="home">
    <h1>Welcome to Klask Tournament Dashboard</h1>
    <CreateTournament v-bind:players="players" v-on:create-new-tournament="newTournament"/>
    <!-- <Knockout v-bind:tournament="tournament"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import CreateTournament from '@/components/CreateTournament.vue';
// import Knockout from '@/components/Knockout.vue';

export default {
  name: 'Home',
  components: {
    CreateTournament,
    // Knockout
  },
  data () {
    let tournament = window.localStorage.getItem('klask_tournament');
    let players = window.localStorage.getItem('klask_players');

    tournament = {
      matches : []
    }
    // return { tournament: store ? JSON.parse(store) : {}}
    return {
      tournament: tournament,
      players: players ? JSON.parse(players) : []
    };
  },
  methods: {
    newTournament(players) {
      function genMatches (nTeams) {
        let matchArray = [];
        while (nTeams > 1) {
            nTeams = (nTeams + 1) >> 1;
            var matches = [];
            for (var i = 0; i < nTeams; ++i) {
                matches.push([]);
            }
            matchArray.push(matches);
        }
        return matchArray;
      }

      const matches = genMatches(players);
      this.tournament ={matches: matches};
    }
  }
  // created() {
    // createNewTournament() {

    // }
  // }
}
</script>
