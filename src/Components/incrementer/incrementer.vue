<template>
    <div>
        <div class="message">Value is: {{ counter }}</div>
        <a href="#" v-on:click="incrementCounter">Increment</a>
        <a href="#" v-on:click="resetCounter">Reset</a>
    </div>
</template>

<script>
export default {
  data() {
    return { counter: 0 };
  },
  methods: {
    incrementCounter() {
      this.counter += 1;
    },
    resetCounter() {
      this.counter = 0;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "incrementer.scss";
</style>