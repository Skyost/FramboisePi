<template>
  <div>
    <social-head :title="siteName" />
    <page-header>By <a href="https://skyost.eu">Skyost</a>.</page-header>
    <red-box v-if="firstArticle" title="Dernier article 👀">
      <article-card :article="firstArticle" />
    </red-box>
    <h1 v-if="showTitle" class="mt-5 mb-4">
      <b-icon-bookmark /> Articles les plus récents
    </h1>
    <article-list
      :create-query-builder="queryArticles"
      :initial-limit="6"
      :load-limit="9"
      :skip="1"
      size="small"
    />
  </div>
</template>

<script>
import { BIconBookmark } from 'bootstrap-vue'
import { SITE_NAME } from '~/utils/site'

export default {
  components: { BIconBookmark },
  data () {
    return {
      firstArticle: null,
      showTitle: false,
      siteName: SITE_NAME
    }
  },
  async fetch () {
    const firstArticles = await this.$content('articles')
      .sortBy('createdAt', 'desc')
      .limit(2)
      .fetch()
    if (firstArticles.length > 0) {
      this.firstArticle = firstArticles[0]
    }
    this.showTitle = firstArticles.length > 1
  },
  head () {
    return {
      title: 'Accueil'
    }
  },
  computed: {
    otherArticles () {
      return this.articles.slice(1)
    }
  },
  methods: {
    queryArticles () {
      return this.$content('articles')
    }
  }
}
</script>
