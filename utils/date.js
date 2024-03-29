function formatDate (dateString) {
  const date = new Date(dateString)
  return [date.getDate(), date.getMonth() + 1, date.getFullYear()].map(n => n < 10 ? `0${n}` : `${n}`).join('/')
}

export { formatDate }
