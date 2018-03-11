{{#pug}}
<template lang="pug">
  #app
    img(src="./assets/logo.png")
    {{#router}}
    router-view
    {{else}}
    home
    {{/router}}
</template>
{{else}}
<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{#router}}
    <router-view/>
    {{else}}
    <Home/>
    {{/router}}
  </div>
</template>
{{/pug}}

<script>
{{#unless router}}
import Home from './pages/home'

{{/unless}}
export default {
  name: 'App'{{#router}}{{else}},
  components: {
    Home
  }{{/router}}
}
</script>

{{#sass}}
<style lang="sass">
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    text-align: center
    color: #2c3e50
    margin-top: 60px
</style>
{{else}}
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
{{/sass}}
