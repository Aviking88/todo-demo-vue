<template>
  <label class="check-box-container">
    <input type="checkbox" v-bind:checked="checked"
      v-on:change="$emit('change', $event.target.checked)" />
    <span class="checkmark"></span>
  </label>
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
.check-box-container {
  display: initial;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: #eee;
    &:after {
      left: 11px;
      top: 7px;
      width: 9px;
      height: 14px;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
    }
  }
  /* Create a custom checkbox */
  .checkmark {
    &:after {
      content: "";
      position: absolute;
      display: none;
    }
  }
}

/* On mouse-over, add a grey background color */
.check-box-container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.check-box-container input:checked ~ .checkmark {
  background-color: #2196f3;
}

/* Show the checkmark when checked */
.check-box-container input:checked ~ .checkmark:after {
  display: block;
}
</style>
