import { HOST_NAME, SITE_DESCRIPTION, SITE_NAME } from './site'
import { getArticleAddress, getArticleImage, getArticleAuthor } from './article'
const { $content } = require('@nuxt/content')

async function createFeed (feed) {
  feed.options = {
    title: SITE_NAME,
    link: `${HOST_NAME}/feed.xml`,
    description: SITE_DESCRIPTION,
    language: 'fr',
    favicon: `${HOST_NAME}/favicon.ico`,
    image: `${HOST_NAME}/images/pi.svg`,
    author: {
      name: 'Skyost',
      link: 'https://skyost.eu'
    }
  }

  feed.addCategory('Raspberry Pi')
  feed.addCategory('Computers')
  feed.addCategory('Electronic')
  feed.addCategory('Technology')

  const articles = await $content('articles')
    .fetch()
  for (const article of articles) {
    const url = `${HOST_NAME}${getArticleAddress(article)}`
    feed.addItem({
      title: article.title,
      id: url,
      link: url,
      date: new Date(article.createdAt),
      description: article.description,
      content: `<p>${article.description}</p><p>Lire l'article en entier sur <a href="${url}">${SITE_NAME}</a>.</p>`,
      author: [
        getArticleAuthor(article)
      ],
      image: `${HOST_NAME}${getArticleImage(article)}`
    })
  }
}

async function createRoutes () {
  const articles = await $content('articles')
    .fetch()
  return articles.map(article => getArticleAddress(article))
}

module.exports = { createFeed, createRoutes }
