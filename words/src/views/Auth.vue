<template>
  <div>
    This should pull access_token out of location query string and store it somewhere, then redirect to Home.
    </div>
</template>

<script>
export default {
  name: 'Auth',
  mounted () {
    console.log('Auth.mounted()')
    let params = new URLSearchParams(this.$route.hash.substr(1))
    console.log(params.get('access_token'))
    this.$store.commit('storeDropboxAccessToken', params.get('access_token'))
    this.$router.push('/')
  }
}
</script>

<style scoped lang="scss">
</style>
