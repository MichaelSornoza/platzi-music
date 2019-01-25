<template lang="pug">
  #app
    pm-header

    router-view

    pm-footer
</template>

<script>
import PmFooter from '@/components/layout/Footer.vue'
import PmHeader from '@/components/layout/Header.vue'

export default {
  name: 'app',

  components: { PmFooter, PmHeader }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  a.button {
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .is-active {
    border: 3px #23D160 solid;
  }
</style>
