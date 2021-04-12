const SITE_NAME = 'Framboise Pi'
const SITE_DESCRIPTION = 'Blog consacré au Raspberry Pi. Au programme : des actualités, des tutoriels en français, des conseils, des projets, et bien plus pour exploiter le maximum de votre framboise !'
const HOST_NAME = 'https://framboise-pi.skyost.eu'

function getCurrentAddress (route) {
  return `${HOST_NAME}${route.path}`
}

export { SITE_NAME, SITE_DESCRIPTION, HOST_NAME, getCurrentAddress }
