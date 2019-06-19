<template>
    <div id="app">
       <screen></screen>
    </div>
</template>

<script>
import screen from 'components/detect-ins/screen'
export default {
  name: 'app',
  components: { screen }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
