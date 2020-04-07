import { match as matchModel } from "../store/model";
import { shuffle, cloneDeep } from "lodash";
import { v4 as uuidv4 } from "uuid";

export default function compose(state) {
  let __this = {};
  __this.state = cloneDeep(state);

  function shufflePlayers(players) {
    return shuffle(players);
  }

  function generateMatchesFromPlayers() {
    let matches,
      shuffled = shufflePlayers(__this.state.tournament.participants);

    matches = shuffled.reduce(function (result, value, index, array) {
      if (index % 2 === 0) {
        let match = cloneDeep(matchModel),
          pairOfplayers = array.slice(index, index + 2);
        match.players = [pairOfplayers[0].id, pairOfplayers[1].id];
        match.id = uuidv4();

        result.push(match);
      }

      return result;
    }, []);

    return matches;
  }

  function generateMatchesFromFirstRound(rounds) {
    let newMatches;

    newMatches = rounds[rounds.length - 1].reduce(function (
      result,
      value,
      index,
      array
    ) {
      if (index % 2 === 0) {
        let match = cloneDeep(matchModel),
          pairOfmatches = array.slice(index, index + 2);

        match.id = uuidv4();
        pairOfmatches[0].nextMatchId = match.id;
        pairOfmatches[1].nextMatchId = match.id;

        result.push(match);
      }

      return result;
    },
    []);

    rounds.push(newMatches);

    return rounds;
  }

  function generateRounds() {
    let rounds = [];

    rounds.push(generateMatchesFromPlayers());

    while (rounds[rounds.length - 1].length > 1) {
      rounds = generateMatchesFromFirstRound(rounds);
    }

    return rounds;
  }

  return {
    generateRounds: generateRounds,
  };
}
