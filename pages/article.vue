<template>
  <div v-if="$fetchState.pending">
    <page-header />
    <spring-spinner />
  </div>
  <div v-else-if="article">
    <social-head
      :title="article.title"
      :description="article.description"
      twitter-card="summary_large_image"
      :twitter-image="`${hostName}${articleImage}`"
      :open-graph-image="`${hostName}${articleImage}`"
    />
    <img :src="articleImage" :alt="article.title" class="w-100 mt-5">
    <page-header :title="article.title">
      Écrit par <a :href="author.link" v-text="author.name" /> le {{ publicationDate }}.
      <span v-if="updateDate">
        Mis à jour le {{ updateDate }}.
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
    <social-buttons class="mt-5 mb-5" :article="article" />
    <comments />
  </div>
  <div v-else>
    <page-header title="Erreur 404" />
    <error-display :error-code="404" />
  </div>
</template>

<script>
import PageHeader from '../components/PageHeader'
import SpringSpinner from '../components/SpringSpinner'
import SocialHead from '../components/SocialHead'
import ArticleContent from '../components/Article/ArticleContent'
import ErrorDisplay from '../components/ErrorDisplay'
import { formatDate } from '~/utils/date'
import { getCategoryAddress } from '~/utils/categorie'
import { getArticleAuthor, getArticleImage, getArticlePublicationDate } from '~/utils/article'
import { HOST_NAME } from '~/utils/site'
import Comments from '~/components/Article/Comments'
import SocialButtons from '~/components/Article/Social/SocialButtons'

export default {
  components: { PageHeader, SpringSpinner, SocialHead, ArticleContent, ErrorDisplay, Comments, SocialButtons },
  data () {
    return {
      hostName: HOST_NAME,
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
  computed: {
    articleImage () {
      return getArticleImage(this.article)
    },
    publicationDate () {
      return formatDate(getArticlePublicationDate(this.article))
    },
    updateDate () {
      const publicationDate = getArticlePublicationDate(this.article)
      const updateDate = new Date(this.article.updatedAt)
      const diffTime = Math.abs(updateDate - publicationDate)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return diffDays === 0 ? null : formatDate(updateDate)
    }
  },
  methods: {
    getArticleImage,
    getCategoryAddress
  }
}
</script>

<router>
{
  path: '/article/:slug?'
}
</router>
