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
  setSubscores: (state, payload) => {
    const { roundIndex, matchIndex, subscores } = payload;

    state.tournament.rounds[roundIndex][matchIndex].subscores = subscores;
  },
  setScores: (state, payload) => {
    console.log(payload);
    const { roundIndex, matchIndex, scores } = payload;

    state.tournament.rounds[roundIndex][matchIndex].scores = scores;
  },
  resetSubscores: (state, payload) => {
    const { roundIndex, matchIndex, subscores } = payload;

    state.tournament.rounds[roundIndex][matchIndex].subscores = subscores;
  },
  setMatchWinner: (state, payload) => {
    const { roundIndex, matchIndex, playerId } = payload;

    state.tournament.rounds[roundIndex][matchIndex].winner = playerId;
  },
  setPlayerOnNextMatch: (state, payload) => {
    const { roundIndex, playerId, nextMatchId } = payload;
    let matchIndex;
    let updatedMatch = {
      ...state.tournament.rounds[roundIndex].find((match, index) => {
        matchIndex = index;
        return match.id === nextMatchId;
      }),
    };

    updatedMatch.players.push(playerId);
    state.tournament.rounds[roundIndex][matchIndex] = updatedMatch;
  },
};
