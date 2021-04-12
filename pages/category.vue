<template>
  <div>
    <social-head :title="title" />
    <page-header title="Liste des articles">
      Articles trouvés pour la catégorie <q class="text-capitalize" v-text="$route.params.id" />.
    </page-header>
    <article-list v-if="category" :create-query-builder="queryArticles">
      <em class="text-muted">Pas d'article pour cette catégorie.</em>
    </article-list>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Liste des articles',
      category: null
    }
  },
  head () {
    return {
      title: this.title
    }
  },
  mounted () {
    if (Object.prototype.hasOwnProperty.call(this.$route.params, 'id')) {
      this.category = this.$route.params.id.toLowerCase()
    } else {
      this.category = 'aucune'
    }
    this.title = `Catégorie «${this.capitalize(this.category)}»`
  },
  methods: {
    capitalize (input, lower = false) {
      return (lower ? input.toLowerCase() : input).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase())
    },
    queryArticles () {
      return this.$content('articles')
        .where({ categories: { $contains: this.category } })
    }
  }
}
</script>

<router>
{
  path: '/categorie/:id?'
}
</router>
