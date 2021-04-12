<template>
  <b-navbar toggleable="lg">
    <b-navbar-brand to="/">
      <img class="logo" src="~static/images/pi.svg" alt="Pi">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
          <b-nav-item to="/" :active="$nuxt.$route.path === '/'">
            <b-icon-pen /> Articles
          </b-nav-item>
          <search-item />
          <b-nav-item-dropdown v-if="categories.length > 0" right>
            <template #button-content>
              <b-icon-list-ul /> Catégories
            </template>
            <b-dropdown-item v-for="category in categories" :key="category" :to="getCategoryAddress(category)">
              {{ category }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="https://skyost.eu">
            <b-icon-question /> À propos
          </b-nav-item>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { BIconPen, BIconListUl, BIconQuestion } from 'bootstrap-vue'
import SearchItem from './SearchItem'
import { getCategoryAddress } from '~/utils/categorie'

export default {
  name: 'PageNavbar',
  components: { BIconPen, BIconListUl, BIconQuestion, SearchItem },
  data () {
    return {
      categories: []
    }
  },
  async fetch () {
    const categories = await this.$content('articles')
      .only('categories')
      .fetch()
    const result = []
    for (const articleCategories of categories) {
      for (const category of articleCategories.categories) {
        if (!result.includes(category)) {
          result.push(category)
        }
      }
    }
    result.sort()
    this.categories = result
  },
  methods: {
    getCategoryAddress
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/colors';

.logo {
  height: 2em;
}

::v-deep .nav-item {
  &.show .nav-link,
  &:hover .nav-link,
  .nav-link:hover,
  .active {
    color: $main-color !important;
  }

  &.active {
    border-bottom: 2px solid $main-color;
  }
}

::v-deep .dropdown-item {
  color: black !important;
  text-transform: capitalize;

  &:active {
    color: white !important;
    background-color: $main-color;
  }
}
</style>
