import { SITE_NAME, SITE_DESCRIPTION, HOST_NAME } from './utils/site'
import { createFeed, createRoutes, beforeInsertRootHook } from './utils/config'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: `%s | ${SITE_NAME}`,
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: SITE_DESCRIPTION },
      { name: 'theme-color', content: '#c51d4a' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'alternate', type: 'application/rss+xml', href: '/feed.xml', title: `Flux RSS de ${SITE_NAME}` }
    ]
  },

  loading: {
    color: '#c51d4a'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    'plugins/global-components'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/router-extras',
    '@nuxtjs/stylelint-module',
    '~/modules/sitemap-routes',
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/feed'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: false,
    markdown: {
      remarkAutolinkHeadings: {
        behavior: 'append',
        content: {
          type: 'element',
          tagName: 'span',
          properties: { className: ['anchor'] }
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: {
      ignoreOrder: true
    },
    babel: {
      compact: true,
      minified: true
    }
  },

  hooks: {
    'content:file:beforeInsert': beforeInsertRootHook
  },

  generate: {
    fallback: true,
    routes: createRoutes
  },

  googleFonts: {
    display: 'swap',
    families: {
      Montserrat: true,
      Raleway: true
    }
  },

  robots: {
    UserAgent: '*',
    Disallow: ['/_nuxt/'],
    Sitemap: `${HOST_NAME}/sitemap.xml`
  },

  sitemap: {
    hostname: HOST_NAME,
    defaults: {
      priority: 1,
      lastmod: new Date()
    }
  },

  feed: [
    {
      path: 'feed.xml',
      create: createFeed,
      cacheTime: 1000 * 60 * 15,
      type: 'rss2'
    }
  ]
}
