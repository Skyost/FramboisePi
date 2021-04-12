<template>
  <b-row class="ml-0 mr-0 d-flex flex-column h-100">
    <div class="mb-2 preview-container">
      <slot name="preview" />
    </div>
    <slot name="content" />
  </b-row>
</template>

<script>
export default {
  name: 'SmallCard'
}
</script>

<style lang="scss">
.preview-container {
  width: 100%;
}

.description {
  flex: 1;
}

.btn {
  align-self: flex-start;
}
</style>
