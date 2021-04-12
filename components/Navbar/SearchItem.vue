<template>
  <b-nav-item v-b-modal="'modal-search'">
    <b-icon-search /> Rechercher
    <b-modal
      id="modal-search"
      title="Rechercher un article"
      ok-title="Rechercher"
      ok-variant="red"
      cancel-title="Annuler"
      @ok="onOkClicked"
    >
      <form ref="form" action="/recherche/" method="get">
        <b-form-group
          label="Votre recherche :"
          label-for="terms-input"
          invalid-feedback="Champ requis."
        >
          <b-form-input
            id="terms-input"
            name="requete"
            required
          />
        </b-form-group>
      </form>
    </b-modal>
  </b-nav-item>
</template>

<script>
import { BIconSearch } from 'bootstrap-vue'

export default {
  name: 'SearchItem',
  components: { BIconSearch },
  methods: {
    onOkClicked () {
      this.$refs.form.submit()
    }
  }
}
</script>
