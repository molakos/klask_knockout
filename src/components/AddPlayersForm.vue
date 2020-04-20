<template>
  <div class="content-box">
    <form class="content-form" @submit="submit">
      <h3>Select players amount</h3>
      <select class="select" v-model="size" @change="setPlayersBySize">
        <option value="4">4</option>
        <option value="8">8</option>
        <option value="16">16</option>
        <option value="32">32</option>
      </select>
      <hr class="styled-hr" />
      <h3>Add participants</h3>
      <div
        class="inputs-wrapper"
        v-for="(input, index) in inputs"
        :key="input.id"
      >
        <StyledInput
          v-model="input.name"
          v-bind:forId="'player-name' + index"
          v-bind:label="'Player ' + (index + 1)"
        />
      </div>
      <button class="btn" type="submit">
        Proceed
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { player as playerModel } from "../store/model";
import { v4 as uuidv4 } from "uuid";

import StyledInput from "../common/StyledInput";

export default {
  name: "AddPlayers",
  components: {
    StyledInput,
  },
  methods: {
    ...mapActions(["addParticipants", "createRounds"]),
    submit(e) {
      e.preventDefault();
      this.addParticipants(this.inputs);
      this.createRounds();
    },
    setPlayersBySize(event) {
      let setOfplayers = [...this.inputs],
        size = parseInt(event.target.value, 10);

      if (this.inputs.length > size) {
        setOfplayers = this.decreasePlayers(
          setOfplayers,
          this.inputs.length - size
        );
      } else {
        setOfplayers = this.increasePlayers(
          setOfplayers,
          size - this.inputs.length
        );
      }
      this.inputs = setOfplayers;
    },
    increasePlayers(playersList, increaseByNum) {
      for (let i = 0; i < increaseByNum; i++) {
        let player = { ...playerModel };
        player.id = uuidv4();
        playersList.push(player);
      }

      return playersList;
    },
    decreasePlayers(playersList, decreaseByNum) {
      let indexFrom = playersList.length - decreaseByNum;
      playersList.splice(indexFrom, decreaseByNum);

      return playersList;
    },
  },
  data() {
    return {
      size: 4,
      inputs: this.increasePlayers([], 4),
    };
  },
};
</script>

<style scoped lang="scss">
.inputs-wrapper {
  display: flex;
}

.styled-hr {
  border: 0;
  height: 1px;
  background: $dark-purple;
  background-image: linear-gradient(to right, #ccc, $dark-purple, #ccc);
  width: 100%;
}

::v-deep .styled-input-root {
  flex: 1;
}
</style>
