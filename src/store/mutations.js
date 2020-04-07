import generate from "../matches/generate";

export const mutations = {
  setTournamentName: (state, payload) => {
    state.tournament.name = payload;
  },
  setPlayers: (state, players) => {
    state.tournament.participants = players;
  },
  generateRounds: (state) => {
    state.tournament.rounds = generate(state).generateRounds();
  },
};
