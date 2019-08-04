<template>
  <li>
    <router-link class="disclosure" :to="{ name: 'file', params: { path: path } }">{{ name }}</router-link>
  </li>
</template>

<script>
export default {
  name: 'FileEntry',
  props: {
    path: String,
    name: String
  }
}
</script>

<style scoped lang="scss">
$background: #f2f2f2;
$elHeight: 60px;
li {
  height: $elHeight;
  vertical-align: middle;
  line-height: $elHeight;
  background-color: $background;
  padding-left: 40px;
}
li:nth-child(even) {
  background-color: rgba($background, 0.5);
}
a {
  display: inline-block;
  text-decoration: none;
  height: 100%;
  width: 100%;
  color: #555;
}
a.disclosure::before {
  transform: rotate(45deg);
  content: " ";
  display: inline-block;
  width: 6px;
  height: 6px;
  float: right;
  margin-top: 25px;
  margin-right: 25px;
  border: 3px solid #7f7f7f;
  border-bottom: none;
  border-left: none;
}
</style>
