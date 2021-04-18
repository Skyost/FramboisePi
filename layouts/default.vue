<template>
  <div>
    <page-navbar />
    <b-container>
      <nuxt />
    </b-container>
    <page-footer />
  </div>
</template>

<script>
import PageNavbar from '../components/Navbar/PageNavbar'
import PageFooter from '../components/PageFooter'

export default {
  components: { PageNavbar, PageFooter },
  layout: 'default'
}
</script>

<style lang="scss">
@import 'assets/colors';

html,
body {
  font-family: 'Montserrat', sans-serif;
}

h1,
h2,
h3,
h4 {
  font-family: 'Raleway', sans-serif;
}

.modal-content,
.btn,
input.form-control {
  border-radius: 0;
}

.btn-red {
  color: white !important;
  background-color: $main-color;

  &:hover {
    background-color: darken($main-color, 6%);
  }
}

ul {
  list-style-type: '— ';
}

input.form-control:focus {
  border-color: rgba($main-color, 0.5);
}

.btn-red:focus,
input.form-control:focus {
  box-shadow: 0 0 0 0.2rem rgba($main-color, 0.25);
}

a:link,
a:visited {
  color: $main-color;
}

a:active,
a:hover {
  color: darken($main-color, 5%);
}
</style>
