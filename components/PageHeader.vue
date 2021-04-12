<template>
  <header class="pt-5 pb-5">
    <h1 class="title">
      <span v-if="title" v-text="title" />
      <span v-else>Framboise <img class="pi" src="/images/pi.svg" alt="Pi"></span>
    </h1>
    <span class="d-block text-muted tagline">
      <slot />
    </span>
  </header>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/breakpoints";

.title {
  font-size: 80px;
  margin-bottom: 0;

  .pi {
    height: 0.8em;
    vertical-align: 0.01em;
  }

  @media (max-width: $mobile-width) {
    font-size: 60px;
  }
}

.tagline {
  font-family: 'Raleway', sans-serif;
  margin-left: 5px;
}
</style>
