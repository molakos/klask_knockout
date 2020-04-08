export const getters = {
  getTournament: (state) => state.tournament,
  getParticipants: (state) => state.tournament.participants,
  getParticipantById: (state) => (id) => {
    return state.tournament.participants.find((player) => player.id === id);
  },
};
