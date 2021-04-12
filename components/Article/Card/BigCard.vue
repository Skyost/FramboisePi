<template>
  <b-row>
    <b-col cols="4" class="d-flex align-items-center">
      <slot name="preview" />
    </b-col>
    <b-col cols="8">
      <slot name="content" />
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'BigCard'
}
</script>
