import router from "../router";

export const actions = {
  nameTournament({ commit }, value) {
    commit("setTournamentName", value);
  },
  addParticipants({ commit }, playerList) {
    commit("setPlayers", playerList);
  },
  createRounds({ commit, state }) {
    commit("generateRounds");

    router.push({
      name: "tournament_brackets",
      params: { id: state.tournament.id },
    });
  },
};
