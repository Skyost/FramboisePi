<template>
  <footer>
    <img class="raspberrypi" src="~static/images/raspberrypi.svg" alt="Raspberry Pi">
    Copyright &copy; 2021 - Hugo Delaunay <q>Skyost</q>.
    Tous droits réservés.
    <a v-b-modal="'modal-legals'" href="#">Mentions légales</a>.
    <b-modal
      id="modal-legals"
      title="Mentions légales"
      size="lg"
      ok-title="Fermer"
      ok-variant="secondary"
      ok-only
    >
      <h2>Affiliation</h2>
      <p>
        Ce site est partenaire de certains sites de e-commerce et participe à un programme d’affiliation permettant
        de toucher une commission sur l'achat de certains produits par des liens affiliés.
      </p>

      <h2>Marques</h2>
      <p>
        Raspberry Pi est une marque déposée de la fondation Raspberry Pi.
        Pour plus d'informations, voir
        <q><a href="https://www.raspberrypi.org/trademark-rules/">Trademark rules and brand guidelines</a></q>
        sur le site officiel de la fondation Raspberry Pi.
      </p>

      <h2>Crédits</h2>
      <p>
        Certaines illustrations proviennent de FreePik via <a href="https://www.flaticon.com/">FlatIcon</a>.
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Le contenu de {{ siteName }} est protégé par les lois sur le Copyright et le Code de la Propriété Intellectuelle.
        En conséquence, toute reproduction, totale ou partielle, ou imitation, sans accord exprès,
        préalable et écrit, est interdite.
      </p>
    </b-modal>
  </footer>
</template>

<script>
import { SITE_NAME } from '~/utils/site'

export default {
  name: 'PageFooter',
  data () {
    return {
      siteName: SITE_NAME
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  padding: 1rem 1.5rem;

  .raspberrypi {
    height: 1.5em;
    vertical-align: -0.3em;
    margin-right: 0.5em;
  }
}
</style>
