<template>
  <div>
    <page-header :title="title" />
    <p>
      Vous pouvez continuer votre navigation en allant sur <a href="javascript:history.back()">la page précédente</a> ou
      en allant sur <nuxt-link to="/">la page d'accueil</nuxt-link>.
      <span v-if="errorCode === 404">
        Si quelque chose devait se trouver ici, n'hésitez pas à
        <a href="https://skyost.eu/#contact">me contacter</a> pour me le signaler.
      </span>
    </p>
  </div>
</template>

<script>
import PageHeader from './PageHeader'

export default {
  name: 'ErrorDisplay',
  components: { PageHeader },
  props: {
    errorCode: {
      type: Number,
      default: 500
    }
  },
  computed: {
    title () {
      return this.errorCode === 404 ? 'Page non trouvée !' : `Erreur ${this.statusCode}`
    }
  }
}
</script>
