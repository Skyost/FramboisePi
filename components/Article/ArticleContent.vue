<template>
  <article>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  name: 'ArticleContent',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  async mounted () {
    await this.$nextTick()
    const tables = this.$el.querySelectorAll('table')
    for (const table of tables) {
      table.classList.add('table')
      table.classList.add('table-striped')
      table.classList.add('table-bordered')
      table.classList.add('table-hover')
      table.classList.add('table-responsive')
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .nuxt-content {
  h2,
  h3 {
    .anchor {
      display: inline-block;
      content: '';
      background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(149, 165, 166)" viewBox="0 0 16 16"> <path d="M4.715 6.542L3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.001 1.001 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"/> <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 0 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 0 0-4.243-4.243L6.586 4.672z"/> </svg>');
      background-repeat: no-repeat;
      background-size: 1em 1em;
      height: 1em;
      width: 1em;
      vertical-align: -0.2em;
      opacity: 0;
      transition: all 300ms;
    }

    &:hover .anchor {
      margin-left: 0.2em;
      opacity: 1;
    }
  }

  img,
  .youtube-frame {
    max-width: 100%;
    display: block;
    margin: auto;
  }

  .youtube-frame {
    margin-bottom: 1em;
  }

  .twitter-tweet {
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1em;
  }
}
</style>
