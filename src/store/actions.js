export const actions = {
  nameTournament({ commit }, value) {
    commit("setTournamentName", value);
  },
  addParticipants({ commit }, playerList) {
    commit("setPlayers", playerList);
  },
  createRounds({ commit }) {
    commit("generateRounds");
  },
};
