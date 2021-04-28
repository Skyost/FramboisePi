<template>
  <red-box class="social-buttons" title="Partager l'article">
    <social-button
      v-for="network in networks"
      :key="network"
      :network="network"
      :page="socialPage"
      :extras="socialExtras"
    />
  </red-box>
</template>

<script>
import SocialButton from './SocialButton'
import RedBox from '~/components/RedBox'
import { getCurrentAddress } from '~/utils/site'

export default {
  name: 'SocialButtons',
  components: { SocialButton, RedBox },
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      networks: [
        'facebook',
        'twitter',
        'reddit',
        'flipboard',
        'evernote',
        'email'
      ]
    }
  },
  computed: {
    socialPage () {
      return {
        title: this.article.title,
        description: this.article.description,
        url: getCurrentAddress(this.$route)
      }
    },
    socialExtras () {
      return {
        hashtags: 'RaspberryPi'
      }
    },
    url () {
      return getCurrentAddress(this.$route)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/breakpoints';
@import 'assets/colors';

.social-buttons {
  text-align: center;

  @media (max-width: $tablet-width) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: $mobile-width) {
    padding-left: 50px;
    padding-right: 50px;
  }
}
</style>
