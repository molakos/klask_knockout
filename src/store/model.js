export default {
  tournament: {
    id: null,
    name: null,
    participants: [],
    rounds: [],
  },
};

export const player = {
  id: null,
  totalWins: 0,
  name: null,
};

export const match = {
  id: null,
  players: [],
  subscores: [0, 0],
  scores: [0, 0],
  nextMatchId: null,
};
