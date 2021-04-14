<template>
  <iframe
    class="youtube-frame"
    :src="`https://www.youtube.com/embed/${video}`"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
</template>

<script>
export default {
  name: 'Youtube',
  props: {
    video: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/breakpoints';

.youtube-frame {
  width: 640px;
  height: 360px;

  @media (max-width: $mobile-width) {
    width: 560px;
    height: 315px;
  }
}
</style>
