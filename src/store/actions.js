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
  updateSubscores({ state, commit, dispatch }, payload) {
    const { roundIndex, matchIndex, subscores, side } = payload;

    if (subscores[side] === 6) {
      let newScores = [
        ...state.tournament.rounds[roundIndex][matchIndex].scores,
      ];
      newScores[side] += 1;
      dispatch("updateScores", {
        ...payload,
        scores: newScores,
        subscores: [0, 0],
      });
    } else {
      commit("setSubscores", payload);
    }
  },
  updateScores({ commit, state, dispatch }, payload) {
    const { roundIndex, matchIndex, scores, side } = payload;
    const match = state.tournament.rounds[roundIndex][matchIndex];

    if (scores[side] === 2) {
      commit("setMatchWinner", {
        roundIndex,
        matchIndex,
        playerId: match.players[side],
      });
      dispatch("movePlayerToNextMatch", {
        roundIndex,
        nextMatchId: match.nextMatchId,
        playerId: match.players[side],
      });
    }
    commit("setScores", payload);
    commit("resetSubscores", payload);
  },
  movePlayerToNextMatch({ commit }, payload) {
    const { roundIndex, nextMatchId } = payload;

    if (nextMatchId) {
      let nextRoundIndex = roundIndex + 1;
      commit("setPlayerOnNextMatch", {
        ...payload,
        roundIndex: nextRoundIndex,
      });
    }
  },
};
