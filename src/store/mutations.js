export const mutations = {
  setTournamentName: (state, payload) => {
    state.tournament.name = payload;
  },
  setPlayers: (state, players) => {
    state.tournament.participants = players;
  },
};
