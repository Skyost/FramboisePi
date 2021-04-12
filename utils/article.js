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

export { getArticleImage, getArticleAddress, getArticleAuthor }
