import { getArticleAddress } from '../utils/article'

module.exports = function () {
  this.nuxt.hook('generate:done', async (context) => {
    const routesToExclude =
      process.env.NUXT_ENV_EXCLUDE_ROUTES
        ? process.env.NUXT_ENV_EXCLUDE_ROUTES.split(',')
        : []
    const allRoutes = await Array.from(context.generatedRoutes)
    let result = await allRoutes.filter(route => !routesToExclude.includes(route))

    const { $content } = require('@nuxt/content')
    const articles = await $content('articles')
      .fetch()
    for (const article of articles) {
      const url = getArticleAddress(article)
      if (result.includes(url)) {
        result.push({
          url,
          lastmod: article.updatedAt
        })
        result = result.filter(item => item !== url)
      }
    }

    this.nuxt.options.sitemap.routes = result
  })
}
