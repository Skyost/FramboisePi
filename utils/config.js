import { HOST_NAME, SITE_DESCRIPTION, SITE_NAME } from './site'
import { getArticlePublicationDate, getArticleAddress, getArticleImage, getArticleAuthor } from './article'

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

  const { $content } = require('@nuxt/content')
  const articles = await $content('articles')
    .fetch()
  for (const article of articles) {
    const url = `${HOST_NAME}${getArticleAddress(article)}`
    feed.addItem({
      title: article.title,
      id: url,
      link: url,
      date: getArticlePublicationDate(article),
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
  const { $content } = require('@nuxt/content')
  const articles = await $content('articles')
    .fetch()
  return articles.map(article => getArticleAddress(article))
}

module.exports = { createFeed, createRoutes }
