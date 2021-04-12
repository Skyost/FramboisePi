<template>
  <div class="comments">
    <script
      src="https://utteranc.es/client.js"
      :repo="repo"
      :issue-term="issueTerm"
      :label="label"
      :theme="theme"
      crossorigin="anonymous"
      async
    />
  </div>
</template>

<script>
export default {
  name: 'Comments',
  props: {
    repo: {
      type: String,
      default: 'Skyost/FramboisePi'
    },
    theme: {
      type: String,
      default: 'boxy-light'
    },
    label: {
      type: String,
      default: 'comments'
    },
    issueTerm: {
      type: String,
      default: 'pathname'
    }
  }
}
</script>

<style lang="scss" scoped>
.comments {
  padding: 30px 0;

  ::v-deep .utterances {
    max-width: 100%;
  }
}
</style>
