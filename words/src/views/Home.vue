<script>
import Dropbox from 'dropbox'
import { mapState } from 'vuex'
import FileEntry from '@/components/FileEntry.vue'

// from dropbox app dashboard
var DROPBOX_CLIENT_ID = '8yr733g5n75tu8x'

export default {
  name: 'home',
  components: {
    FileEntry
  },
  computed: {
    ...mapState({
      accessToken: state => state.accessToken,
      files: state => state.files
    })
  },
  methods: {
    auth () {
      var dbx = new Dropbox.Dropbox({ fetch, clientId: DROPBOX_CLIENT_ID })
      var authUrl = dbx.getAuthenticationUrl('http://localhost:8080/auth')
      window.location.href = authUrl
    }
  },
  mounted () {
    if (this.accessToken) {
      // get a file list
      let dbx = new Dropbox.Dropbox({ fetch, accessToken: this.accessToken })
      let vm = this
      dbx.filesListFolder({ path: '' })
        .then(function (response) {
          vm.$store.commit('files', response.entries.map(item => { return { name: item.name, path: decodeURIComponent(item.path_display) } }))
        })
        .catch(function (error) {
          console.error(error)
        })
    } else {
      console.log('no token')
    }
  }
}
</script>

<template>
  <div class="home">
    <a v-if="!accessToken" @click="auth">authorize dropbox</a>
    <ul>
      <FileEntry v-for="(file, index) in files" :key="index":path="file.path" :name="file.name" />
    </ul>
  </div>
</template>

<style scoped lang="scss">
ul {
  // -webkit-overflow-scrolling: touch;
  // overflow-y: auto;
  padding: 0;
  text-align: left;
  list-style: none;
}
</style>
