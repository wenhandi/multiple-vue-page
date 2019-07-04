<template>
    <div id="app">
       <cell></cell>
    </div>
</template>

<script>
import request from '../../utils/request'
import cell from 'components/cell.vue'
export default {
  name: 'app',
  components: { cell },
  methods: {
    getTestData(){
      request({
        url: "/api/",
        method: "post",
        params: { id: 1222}
      }).then(res => {

      })
    }
  }
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
