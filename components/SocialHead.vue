<template>
  <span v-if="false" />
</template>

<script>
import { SITE_NAME, SITE_DESCRIPTION, HOST_NAME, getCurrentAddress } from '~/utils/site'

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
    },
    openGraphImage: {
      type: String,
      default: `${HOST_NAME}/images/social/open-graph.png`
    },
    twitterCard: {
      type: String,
      default: 'summary'
    },
    twitterImage: {
      type: String,
      default: `${HOST_NAME}/images/social/twitter.png`
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
          content: this.openGraphImage
        },
        {
          property: 'og:locale',
          content: 'fr_FR'
        },

        {
          name: 'twitter:card',
          content: this.twitterCard
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
          content: this.twitterImage
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
