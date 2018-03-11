{{#pug}}
<template lang="pug">
  .hello
    h1 {{ msg }}
</template>
{{else}}
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>
{{/pug}}

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

{{#sass}}
<style lang="sass" scoped>
  h1, h2
    font-weight: normal
  ul
    list-style-type: none
    padding: 0
  li
    display: inline-block
    margin: 0 10px
  a
    color: #42b983
</style>
{{else}}
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
{{/sass}}
