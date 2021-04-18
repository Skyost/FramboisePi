<template>
  <div>
    <social-head :title="title" />
    <error-display :error-code="error.statusCode" />
  </div>
</template>

<script>
import SocialHead from '../components/SocialHead'
import ErrorDisplay from '../components/ErrorDisplay'

export default {
  components: { SocialHead, ErrorDisplay },
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  computed: {
    title () {
      return `Erreur ${this.error.statusCode}`
    }
  }
}
</script>
