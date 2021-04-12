function getArticlePublicationDate (article) {
  return new Date(article.date ?? article.createdAt)
}

function getArticleImage (article) {
  return article.image ?? `/images/articles/${article.slug}/preview.png`
}

function getArticleAddress (article) {
  return `/article/${article.slug}`
}

function getArticleAuthor (article) {
  return article.author ?? {
    name: 'Skyost',
    link: 'https://skyost.eu'
  }
}

export { getArticlePublicationDate, getArticleImage, getArticleAddress, getArticleAuthor }
