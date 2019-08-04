<script>
import Dropbox from 'dropbox'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      name: '',
      item: ''
    }
  },
  mounted () {
    // request file from dropbox
    let dbx = new Dropbox.Dropbox({ fetch, accessToken: this.accessToken })
    let vm = this
    dbx.filesDownload({ path: this.path })
      .then(function (response) {
        vm.name = response.name
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
<div class="file-content">
  <div id="nav">
    <router-link to="/" class="left-nav">Back</router-link>
    <span>{{ name }}</span>
  </div>
  <pre>{{ item }}</pre>
</div>
</template>

<style lang="scss" scoped>
#nav span {
  font-size: 24px;
  // font-weight: bold;
  display: relative;
}
.left-nav {
  font-size: 22px;
  position: absolute;
  left: 0;
}
.left-nav::before {
  content: " ";
  display: inline-block;
  width: 12px;
  height: 12px;
  border-bottom: 3px solid black;
  border-left: 3px solid black;
  transform: rotate(45deg);
  margin-left: 10px;
  margin-right: 5px;
}
.file-content {
  height: 100%;
  font-size: 16px;
  margin-top: 60px;
  background-color: black;
}
pre {
  padding: 1em;
  color: white;
  overflow: auto;
  text-align: left;
  white-space: pre-wrap;
}
</style>
