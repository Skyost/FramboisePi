<template>
  <span v-if="false" />
</template>

<script>
import { SITE_NAME, SITE_DESCRIPTION, getCurrentAddress } from '~/utils/site'

export default {
  name: 'SocialHead',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: SITE_DESCRIPTION
    }
  },
  head () {
    return {
      meta: [
        {
          property: 'og:title',
          content: this.title
        },
        {
          property: 'og:description',
          content: this.description
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:site_name',
          content: SITE_NAME
        },
        {
          property: 'og:url',
          content: getCurrentAddress(this.$route)
        },
        {
          property: 'og:image',
          content: '/images/social/open-graph.png'
        },
        {
          property: 'og:locale',
          content: 'fr_FR'
        },

        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:title',
          content: this.title
        },
        {
          name: 'twitter:description',
          content: this.description
        },
        {
          name: 'twitter:site',
          content: '@Skyost'
        },
        {
          name: 'twitter:creator',
          content: '@Skyost'
        },
        {
          name: 'twitter:url',
          content: getCurrentAddress(this.$route)
        },
        {
          name: 'twitter:image',
          content: '/images/social/twitter.png'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: this.$route.path
        }
      ]
    }
  }
}
</script>
