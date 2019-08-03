<script>
import Dropbox from 'dropbox'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      item: ''
    }
  },
  mounted () {
    // request file from dropbox
    let dbx = new Dropbox.Dropbox({ fetch, accessToken: this.accessToken })
    let vm = this
    dbx.filesDownload({ path: this.path })
      .then(function (response) {
        let reader = new FileReader()
        reader.addEventListener('loadend', function () {
          vm.item = reader.result
        })
        reader.readAsText(response.fileBlob)
      })
      .catch(function (error) {
        console.error(error)
      })
  },
  computed: {
    ...mapState({
      accessToken: state => state.accessToken
    }),
    path () {
      return this.$route.params.path
    }
  }
}
</script>

<template>
<div>
  <pre>{{ item }}
  </pre>
</div>
</template>

<style lang="scss" scoped>
pre {
  text-align: left;
}
</style>
