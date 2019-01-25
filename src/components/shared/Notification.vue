<template lang="pug">
  .container
    .columns
      .columns.is-5.is-offset-4
        div(:class="classType")
          slot(name="body") Algo anduvo mal
</template>

<script>
export default {
  props: {
    notificationColor: String
  },
  computed: {
    classType () {
      return `notification ${this.notificationColor}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .columns {
    margin: auto;
    margin-top: 5px;
  }
</style>
