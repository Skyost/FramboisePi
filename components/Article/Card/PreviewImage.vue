<template>
  <div ref="preview" class="preview" :style="`background-image: url('${getArticleImage(article)}')`" />
</template>

<script>
import { getArticleImage } from '@/utils/article'

export default {
  name: 'PreviewImage',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  destroyed () {
    window.removeEventListener('resize', this.resizePreview)
  },
  beforeMount () {
    window.addEventListener('resize', this.resizePreview)
  },
  async mounted () {
    await this.$nextTick()
    this.resizePreview()
  },
  methods: {
    getArticleImage,
    resizePreview () {
      if (this.$refs.preview) {
        const preview = this.$refs.preview
        preview.style.height = `${preview.offsetWidth / 2}px`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.preview {
  display: block;
  width: 100%;
  height: 1px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
