<template>
  <div class="red-box">
    <span v-if="title" class="title" v-text="title" />
    <slot />
  </div>
</template>

<script>
export default {
  name: 'RedBox',
  props: {
    title: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/breakpoints';
@import 'assets/colors';

.red-box {
  background-color: rgba($main-color, 0.1);
  margin: 0;
  padding: 40px 20px;
  position: relative;

  .title {
    font-family: 'Raleway', sans-serif;
    display: inline-block;
    padding: 4px 10px;
    text-transform: uppercase;
    background-color: $main-color;
    color: white;
    transform: rotate(45deg) translateX(30%);
    position: absolute;
    top: 0;
    right: 0;

    @media (max-width: $mobile-width) {
      right: 10px;
    }
  }

  @media (max-width: $mobile-width) {
    padding-left: 30px;
    padding-right: 30px;
  }
}
</style>
