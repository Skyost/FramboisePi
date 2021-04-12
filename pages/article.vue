<template>
  <div v-if="$fetchState.pending">
    <page-header />
    <spring-spinner />
  </div>
  <div v-else-if="article">
    <social-head :title="article.title" :description="article.description" />
    <img :src="getArticleImage(article)" :alt="article.title" class="w-100 mt-5">
    <page-header :title="article.title">
      Écrit par <a :href="author.link" v-text="author.name" /> le {{ formatDate(article.createdAt) }} à
      {{ formatHour(article.createdAt) }}.
      <span v-if="article.updatedAt">
        Mis à jour le {{ formatDate(article.updatedAt) }} à {{ formatHour(article.updatedAt) }}.
      </span>
      <span v-if="article.categories.length > 0">
        <br>Posté dans
        <span v-if="article.categories.length === 1">
          la catégorie
        </span>
        <span v-else>
          les catégories :
        </span>
        <span v-for="(category, index) in article.categories" :key="category">
          <q><nuxt-link :to="getCategoryAddress(category)" class="text-capitalize">{{ category }}</nuxt-link></q><span v-if="index + 1 < article.categories.length">, </span><span v-else>.</span>
        </span>
      </span>
    </page-header>
    <article-content :article="article" />
    <social-icons class="mt-5 mb-5" :article="article" />
    <comments />
  </div>
  <div v-else>
    <page-header title="Erreur 404" />
    <error-display :error-code="404" />
  </div>
</template>

<script>
import { getArticleImage, getArticleAuthor } from '~/utils/article'
import { getCategoryAddress } from '~/utils/categorie'
import { formatDate, formatHour } from '~/utils/date'
import Comments from '~/components/Article/Comments'
import SocialIcons from '~/components/Article/SocialIcons'

export default {
  components: { Comments, SocialIcons },
  data () {
    return {
      article: null,
      author: null
    }
  },
  async fetch () {
    if (Object.prototype.hasOwnProperty.call(this.$route.params, 'slug')) {
      this.article = await this.$content('articles', this.$route.params.slug)
        .fetch()
      this.author = getArticleAuthor(this.article)
    }
  },
  head () {
    return {
      title: this.article ? this.article.title : "Lecture d'un article"
    }
  },
  methods: {
    getArticleImage,
    getCategoryAddress,
    formatDate,
    formatHour
  }
}
</script>

<router>
{
  path: '/article/:slug?'
}
</router>
