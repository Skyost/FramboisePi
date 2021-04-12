<template>
  <div>
    <div v-if="articles.length > 0">
      <b-row v-if="size === 'small'" class="justify-content-center">
        <b-col v-for="article in articles" :key="article.slug" cols="12" md="6" lg="4" class="pb-5">
          <article-card :article="article" size="small" />
        </b-col>
      </b-row>
      <div v-else>
        <article-card v-for="article in articles" :key="article.slug" :article="article" class="pb-5" />
      </div>
    </div>
    <div v-else class="text-center">
      <slot />
    </div>
    <client-only v-if="articleCount > 0 && articles.length < articleCount">
      <infinite-loading @infinite="infiniteHandler">
        <template #spinner>
          <spring-spinner />
        </template>
      </infinite-loading>
    </client-only>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'

export default {
  name: 'ArticleList',
  components: { InfiniteLoading },
  props: {
    createQueryBuilder: {
      type: Function,
      required: true
    },
    initialLimit: {
      type: Number,
      default: 10
    },
    loadLimit: {
      type: Number,
      default: 10
    },
    skip: {
      type: Number,
      default: 0
    },
    size: {
      type: String,
      default: 'big'
    }
  },
  data () {
    return {
      articleCount: 0,
      articles: []
    }
  },
  async fetch () {
    this.articles = await this.createQueryBuilder()
      .skip(this.skip)
      .limit(this.initialLimit)
      .sortBy('createdAt', 'desc')
      .fetch()
    this.articleCount = (await this.createQueryBuilder().only('createdAt').fetch()).length - this.skip
  },
  methods: {
    async infiniteHandler () {
      this.articles = this.articles.concat(
        await this.createQueryBuilder()
          .skip(this.articles.length + this.skip)
          .limit(this.loadLimit)
          .sortBy('createdAt', 'desc')
          .fetch()
      )
    }
  }
}
</script>