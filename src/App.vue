<template>
  <div id="app">
    <div class="container">
      <Configurador></Configurador>
    </div>
  </div>
</template>

<script>
import Configurador from './components/Configurador.vue'

export default {
  name: 'App',
  components: {
    Configurador
  },
  created() {
    this.$store.dispatch('getData')
  }
}
</script>

<style>

</style>
