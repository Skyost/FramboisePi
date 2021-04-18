<template>
  <component :is="tag">
    <template #preview>
      <preview-image :article="article" />
    </template>
    <template #content>
      <span class="date d-block text-muted w-100" v-text="publicationDate" />
      <h2 v-text="article.title" />
      <p class="description" v-text="article.description" />
      <b-button class="mt-1 mt-lg-3" variant="red" :to="getArticleAddress(article)">
        <b-icon-reply-fill /> Lire l'article
      </b-button>
    </template>
  </component>
</template>

<script>
import { BIconReplyFill } from 'bootstrap-vue'
import PreviewImage from './PreviewImage'
import BigCard from './BigCard'
import SmallCard from './SmallCard'
import { getArticleAddress, getArticlePublicationDate } from '~/utils/article'
import { formatDate } from '~/utils/date'

export default {
  name: 'ArticleCard',
  components: { BIconReplyFill, PreviewImage, BigCard, SmallCard },
  props: {
    article: {
      type: Object,
      required: true
    },
    size: {
      type: String,
      default: 'big'
    }
  },
  data () {
    return {
      tag: 'div'
    }
  },
  computed: {
    publicationDate () {
      return formatDate(getArticlePublicationDate(this.article))
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.updateTag)
  },
  beforeMount () {
    window.addEventListener('resize', this.updateTag)
  },
  async mounted () {
    await this.$nextTick()
    this.updateTag()
  },
  methods: {
    getArticleAddress,
    formatDate,
    updateTag () {
      const viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
      this.tag = this.size === 'big' && viewportWidth >= 768 ? 'big-card' : 'small-card'
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .date {
  font-weight: lighter;
}
</style>
