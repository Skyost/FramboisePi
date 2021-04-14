import { parse } from 'node-html-parser'
import { HOST_NAME, SITE_DESCRIPTION, SITE_NAME } from './site'
import { getArticlePublicationDate, getArticleAddress, getArticleImage, getArticleAuthor } from './article'

const remark = require('remark')
const remarkSqueezeParagraphs = require('remark-squeeze-paragraphs')
const remarkSlug = require('remark-slug')
const remarkAutolinkHeadings = require('remark-autolink-headings')
const remarkExternalLinks = require('remark-external-links')
const remarkFootnotes = require('remark-footnotes')
const remarkHtml = require('remark-html')
const remarkGfm = require('remark-gfm')

const remarkProcessor = remark()
  .use(remarkSqueezeParagraphs)
  .use(remarkSlug)
  .use(remarkAutolinkHeadings)
  .use(remarkExternalLinks)
  .use(remarkFootnotes)
  .use(remarkGfm)
  .use(remarkHtml)

async function createFeed (feed) {
  feed.options = {
    title: SITE_NAME,
    link: `${HOST_NAME}/feed.xml`,
    description: SITE_DESCRIPTION,
    language: 'fr',
    favicon: `${HOST_NAME}/favicon.ico`,
    image: `${HOST_NAME}/images/social/rss.png`,
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
    .sortBy('date', 'desc')
    .fetch()
  for (const article of articles) {
    const url = `${HOST_NAME}${getArticleAddress(article)}`
    feed.addItem({
      title: article.title,
      id: url,
      link: url,
      date: getArticlePublicationDate(article),
      description: article.description,
      content: article.bodyHtml,
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

function beforeInsertRootHook (document) {
  if (document.dir === '/articles' && document.extension === '.md') {
    const root = parse(remarkProcessor.processSync(document.text).toString())
    const images = root.querySelectorAll('img')
    for (const image of images) {
      const src = image.getAttribute('src')
      if (src.startsWith('/')) {
        image.setAttribute('src', `${HOST_NAME}${src}`)
      }
    }
    const links = root.querySelectorAll('a')
    for (const link of links) {
      const href = link.getAttribute('href')
      if (href.startsWith('/')) {
        link.setAttribute('href', `${HOST_NAME}${href}`)
      }
    }
    const titleLinks = root.querySelectorAll('h2 a')
    for (const titleLink of titleLinks) {
      if (titleLink.querySelector('.icon.icon-link')) {
        titleLink.remove()
      }
    }
    const youtubeVideos = root.querySelectorAll('youtube')
    for (const youtubeVideo of youtubeVideos) {
      const video = youtubeVideo.getAttribute('video')
      youtubeVideo.replaceWith(
        `
<iframe
  width="640"
  height="360"
  src="https://www.youtube.com/embed/${video}"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
/>`
      )
    }
    document.bodyHtml = root.outerHTML
  }
}

module.exports = { createFeed, createRoutes, beforeInsertRootHook }
