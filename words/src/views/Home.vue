<template>
  <div class="home">
    <HelloWorld msg="There will be content."/>
    <a v-if="!accessToken" href="#" @click="auth" id="authlink">authorize dropbox</a>
    <ul>
      <li v-for="(file, index) in files" :key="index">{{ file }}</li>
    </ul>
  </div>
</template>

<script>
import Dropbox from 'dropbox'
import { mapState } from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'

// from dropbox app dashboard
var CLIENT_ID = '8yr733g5n75tu8x'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    ...mapState({
      accessToken: state => state.accessToken,
      files: state => state.files
    })
  },
  methods: {
    auth () {
      console.log(`auth()`)
      var dbx = new Dropbox.Dropbox({ fetch, clientId: CLIENT_ID })
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
          vm.$store.commit('files', response.entries.map(item => { return item.name }))
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
