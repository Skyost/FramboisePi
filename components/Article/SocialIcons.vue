<template>
  <red-box class="social-icons" title="Partager l'article">
    <vue-goodshare-facebook
      :page_url="url"
      :page_title="article.title"
      :page_description="article.description"
      title_social="Facebook"
      has_icon
      has_square_edges
    />
    <vue-goodshare-twitter
      :page_url="url"
      :page_title="article.title"
      title_social="Twitter"
      has_icon
      has_square_edges
    />
    <vue-goodshare-reddit
      :page_url="url"
      :page_title="article.title"
      title_social="Reddit"
      has_icon
      has_square_edges
    />
    <vue-goodshare-email
      :page_url="url"
      :mail_subject="article.title"
      title_social="Email"
      has_icon
      has_square_edges
    />
  </red-box>
</template>

<script>
import VueGoodshareFacebook from 'vue-goodshare/src/providers/Facebook.vue'
import VueGoodshareTwitter from 'vue-goodshare/src/providers/Twitter.vue'
import VueGoodshareReddit from 'vue-goodshare/src/providers/Reddit.vue'
import VueGoodshareEmail from 'vue-goodshare/src/providers/Email.vue'
import RedBox from '~/components/RedBox'
import { getCurrentAddress } from '~/utils/site'

export default {
  name: 'SocialIcons',
  components: { VueGoodshareFacebook, VueGoodshareTwitter, VueGoodshareReddit, VueGoodshareEmail, RedBox },
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed: {
    url () {
      return getCurrentAddress(this.$route)
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/colors';

.social-icons {
  text-align: center;

  ::v-deep .button-social:hover {
    text-decoration: none;
  }
}
</style>
