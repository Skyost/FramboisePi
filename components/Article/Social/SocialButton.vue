<template>
  <a
    :href="url"
    class="social-button"
    :class="network"
    target="_blank"
    @click.prevent="onClick"
  >
    <span class="icon">
      <svg
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          :d="svgPath"
        />
      </svg>
    </span>
    <span class="name" v-text="name" />
  </a>
</template>

<script>
export default {
  name: 'SocialButton',
  props: {
    network: {
      type: String,
      required: true
    },
    page: {
      type: Object,
      required: true
    },
    extras: {
      type: Object,
      required: true
    }
  },
  computed: {
    name () {
      return this.network.charAt(0).toUpperCase() + this.network.slice(1)
    },
    url () {
      let url = '#'
      switch (this.network) {
        case 'facebook':
          url = 'https://www.facebook.com/sharer/sharer.php?u=@u&title=@t&description=@d&hashtag=@h'
          break
        case 'twitter':
          url = 'https://twitter.com/intent/tweet?text=@t&url=@u&hashtags=@h'
          break
        case 'reddit':
          url = 'https://www.reddit.com/submit?url=@u&title=@t'
          break
        case 'flipboard':
          url = 'https://share.flipboard.com/bookmarklet/popout?v=2&url=@u&title=@t'
          break
        case 'evernote':
          url = 'https://www.evernote.com/clip.action?url=@u&title=@t'
          break
        case 'email':
          url = 'mailto:?subject=@t&body=@u%0D%0A@d'
          break
      }
      return url.replace(/@u/g, encodeURIComponent(this.page.url))
        .replace(/@t/g, encodeURIComponent(this.page.title))
        .replace(/@d/g, encodeURIComponent(this.page.description))
        .replace(/@h/g, this.extras.hashtags)
    },
    svgPath () {
      switch (this.network) {
        case 'facebook':
          return 'm 375.14,288 14.22,-92.66 h -88.91 v -60.13 c 0,-25.35 12.42,-50.06 52.24,-50.06 h 40.42 V 6.26 C 393.11,6.26 356.43,0 321.36,0 248.14,0 200.28,44.38 200.28,124.72 v 70.62 H 118.89 V 288 h 81.39 V 512 H 300.45 V 288 Z'
        case 'twitter':
          return 'M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'
        case 'reddit':
          return 'M440.3 203.5c-15 0-28.2 6.2-37.9 15.9-35.7-24.7-83.8-40.6-137.1-42.3L293 52.3l88.2 19.8c0 21.6 17.6 39.2 39.2 39.2 22 0 39.7-18.1 39.7-39.7s-17.6-39.7-39.7-39.7c-15.4 0-28.7 9.3-35.3 22l-97.4-21.6c-4.9-1.3-9.7 2.2-11 7.1L246.3 177c-52.9 2.2-100.5 18.1-136.3 42.8-9.7-10.1-23.4-16.3-38.4-16.3-55.6 0-73.8 74.6-22.9 100.1-1.8 7.9-2.6 16.3-2.6 24.7 0 83.8 94.4 151.7 210.3 151.7 116.4 0 210.8-67.9 210.8-151.7 0-8.4-.9-17.2-3.1-25.1 49.9-25.6 31.5-99.7-23.8-99.7zM129.4 308.9c0-22 17.6-39.7 39.7-39.7 21.6 0 39.2 17.6 39.2 39.7 0 21.6-17.6 39.2-39.2 39.2-22 .1-39.7-17.6-39.7-39.2zm214.3 93.5c-36.4 36.4-139.1 36.4-175.5 0-4-3.5-4-9.7 0-13.7 3.5-3.5 9.7-3.5 13.2 0 27.8 28.5 120 29 149 0 3.5-3.5 9.7-3.5 13.2 0 4.1 4 4.1 10.2.1 13.7zm-.8-54.2c-21.6 0-39.2-17.6-39.2-39.2 0-22 17.6-39.7 39.2-39.7 22 0 39.7 17.6 39.7 39.7-.1 21.5-17.7 39.2-39.7 39.2z'
        case 'flipboard':
          return 'M 32,32 V 480 H 480 V 32 Z m 358.4,179.2 h -89.6 v 89.6 h -89.6 v 89.6 H 121.6 V 121.6 h 268.8 z'
        case 'evernote':
          return 'm 184.82839,132.31764 c 1.6,22.31 -17.55,21.59 -21.61,21.59 -68.930001,0 -73.640001,-1 -83.580001,3.34 -0.56,0.22 -0.74,0 -0.37,-0.37 L 187.79839,46.557641 c 0.38,-0.37 0.6,-0.22 0.38,0.37 -4.35,9.99 -3.35,15.09 -3.35,85.389999 z m 79,308 c -14.68,-37.08 13,-76.93 52.52,-76.62 17.49,0 22.6,23.21 7.95,31.42 -6.19,3.3 -24.95,1.74 -25.14,19.2 -0.05,17.09 19.67,25 31.2,24.89 a 45.64,45.64 0 0 0 45.65,-45.65 v -0.08 c 0,-11.63 -7.79,-47.22 -47.54,-55.34 -7.72,-1.54 -65,-6.35 -68.35,-50.52 -3.74,16.93 -17.4,63.49 -43.11,69.09 -8.74,1.94 -69.68,7.64 -112.92,-36.77 0,0 -18.570001,-15.23 -28.230001,-57.95 -3.38,-15.75 -9.28,-39.7 -11.14,-62 0,-18 11.14,-30.45 25.07,-32.2 81.000001,0 90.000001,2.32 101.000001,-7.8 9.82,-9.24 7.8,-15.5 7.8,-102.779999 1,-8.3 7.79,-30.81 53.41,-24.14 6,0.86 31.91,4.18 37.48,30.64 l 64.26,11.15 c 20.43,3.71 70.94,7 80.6,57.939999 22.66,121.09 8.91,238.46 7.8,238.46 -15.98,114.38 -111.07,108.85 -111.07,108.85 -18.95,-0.23 -54.25,-9.4 -67.27,-39.83 z m 80.94,-204.84 c -1,1.92 -2.2,6 0.85,7 14.09,4.93 39.75,6.84 45.88,5.53 3.11,-0.25 3.05,-4.43 2.48,-6.65 -3.53,-21.85 -40.83,-26.5 -49.24,-5.92 z'
        case 'email':
          return 'M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z'
        default:
          return ''
      }
    }
  },
  methods: {
    onClick () {
      this.openPopUpWindow(this.url, 640, 480)
    },
    openPopUpWindow (url, width, height) {
      const left = Math.round(screen.width / 2 - width / 2)
      const top = Math.round(screen.height / 2 - height / 2)
      const windowConfig = `width=${width},height=${height},left=${left},top=${top}`

      return window.open(
        url,
        'Partager cette page',
        `${windowConfig},toolbar=no,menubar=no,scrollbars=no`
      )
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/breakpoints';

@mixin social-button($color) {
  background-color: $color;

  .icon {
    background-color: darken($color, 7%);
  }

  &:hover {
    background-color: lighten($color, 7%);

    .icon {
      background-color: $color;
    }
  }
}

.social-button {
  color: white;
  text-decoration: none;
  display: inline-flex;
  margin: 3px 5px;
  align-content: center;
  align-items: center;

  .icon {
    height: 2.4em;
    padding: 0.4em;

    svg {
      color: white;
      height: 100%;
    }

    @media (max-width: $mobile-width) {
      height: 3em;
    }
  }

  .name {
    padding: 0 10px;

    @media (max-width: $mobile-width) {
      display: none;
    }
  }

  &.facebook {
    @include social-button(#3b5998);
  }

  &.twitter {
    @include social-button(#1da1f2);
  }

  &.reddit {
    @include social-button(#ff4500);
  }

  &.flipboard {
    @include social-button(#cc0000);
  }

  &.evernote {
    @include social-button(#00aa11);
  }

  &.email {
    @include social-button(#414141);
  }
}
</style>
