<template>
  <form @submit="submit">
    <h3>Add participants</h3>
    <div v-for="(input, index) in inputs" :key="input.id">
      <label :for="'player-name' + index">
        Name of player {{ index + 1 }}
      </label>
      <input
        :id="'player-name' + index"
        v-model="input.name"
        autocomplete="off"
        placeholder="Enter name"
      />
      <button type="button" v-on:click="removePlayer(input.id)">
        Remove
      </button>
    </div>
    <button v-on:click="addPlayer" type="button">
      Add a player
    </button>
    <button v-on:click="extendPlayersList" type="button">
      Add 4 more
    </button>
    <button type="submit">
      Proceed
    </button>
  </form>
</template>

<script>
import { mapActions } from "vuex";
import { player as playerModel } from "../store/model";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "AddPlayers",
  methods: {
    ...mapActions(["addParticipants", "createRounds"]),
    submit(e) {
      e.preventDefault();

      if (this.inputs.length % 4 === 0) {
        this.addParticipants(this.inputs);
        this.createRounds();
        this.$router.push({ name: "add_players" });
      } else {
        window.alert("Number of participants must be dividable with 4!");
      }
    },
    addFourPlayers() {
      let setOfplayers = [];

      for (let i = 0; i < 4; i++) {
        let player = { ...playerModel };
        player.id = uuidv4();
        setOfplayers.push(player);
      }

      return setOfplayers;
    },
    extendPlayersList() {
      this.inputs = [...this.inputs, ...this.addFourPlayers()];
    },
    removePlayer(id) {
      this.inputs = this.inputs.filter((input) => input.id != id);
    },
    addPlayer() {
      this.inputs = [...this.inputs, { ...playerModel, id: uuidv4() }];
    },
  },
  data() {
    return {
      inputs: this.addFourPlayers(),
    };
  },
};
</script>

<style scoped></style>
