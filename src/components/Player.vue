<template lang="pug">
  .content(v-if="track && track.album")
    p
      img(:src="track.album.images[0].url")

    p
      strong {{ track.name }}
      small [{{ track.duration_ms | ms-to-mm }}]

    p
      audio(controls, :src="track.preview_url")
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['track'])
  }
}
</script>

<style lang="scss" scoped>
  audio {
    height: 50px;
  }
  img {
    width: 150px;
    border-radius: 50%;
  }
</style>
