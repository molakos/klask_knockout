<template>
  <div class="styled-input-root">
    <div class="styled-input-wrap">
      <input
        :id="forId"
        v-bind:value="value"
        v-on="inputListeners"
        autocomplete="off"
      />
    </div>
    <label class="styled-input-label" :for="forId">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "StyledInput",
  props: ["value", "label", "forId"],
  computed: {
    inputListeners: function() {
      return Object.assign({}, this.$listeners, {
        focus: () => {
          this.$el.classList.add("shrinked", "focused");
        },
        blur: () => {
          if (!this.value.length) this.$el.classList.remove("shrinked");
          this.$el.classList.remove("focused");
        },
        input: (event) => {
          this.$emit("input", event.target.value);
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.styled-input-root {
  margin: $margin-small;
  position: relative;
  width: 14rem;

  .styled-input-label {
    position: absolute;
    transform: translate(6px, 8px) scale(1);
    transform-origin: top left;
    display: block;
    font-weight: 700;
    color: $dark-purple;
    padding: 2px;
    pointer-events: none;
    top: 0;
    left: 0;
    transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
      transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }
  .styled-input-wrap {
    cursor: text;
    border: 1px solid $dark-purple;
    border-radius: 3px;
    overflow: hidden;
  }
  .styled-input-wrap:hover {
    border: 1px solid $light-purple;
  }
  .styled-input-wrap:hover + .styled-input-label {
    color: $light-purple;
  }

  input {
    width: 100%;
    height: 2rem;
    line-height: 1.85rem;
    border: 0;
    padding: 0.375rem;
    font-size: 0.875rem;
  }

  input:focus {
    outline: none;
  }
}

.styled-input-root.shrinked {
  .styled-input-label {
    top: 0;
    left: 0;
    background-color: white;
    transform: translate(6px, -10px) scale(0.75);
  }
}

.styled-input-root.focused {
  .styled-input-wrap {
    border-color: $light-purple;
  }

  .styled-input-label {
    color: $light-purple;
  }
}
</style>
