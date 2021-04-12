<template>
  <div>
    <social-head :title="title" />
    <page-header title="Liste des articles">
      Affichage des résultats de votre recherche <q v-text="keywords" />.
    </page-header>
    <article-list v-if="keywords" :create-query-builder="queryArticles">
      <em class="text-muted">Aucun article trouvé.</em>
    </article-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Rechercher un article',
      keywords: null
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  mounted () {
    if (Object.prototype.hasOwnProperty.call(this.$route.query, 'requete')) {
      this.keywords = this.$route.query.requete
    }
  },
  methods: {
    queryArticles () {
      return this.$content('articles')
        .search(this.keywords)
    }
  }
}
</script>

<router>
{
  path: '/recherche/'
}
</router>
