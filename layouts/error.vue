<template>
  <div>
    <social-head :title="title" />
    <error-display :error-code="error.statusCode" />
  </div>
</template>

<script>
import SocialHead from '../components/SocialHead'
export default {
  components: { SocialHead },
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
