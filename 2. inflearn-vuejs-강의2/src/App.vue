<template>
  <div id="app">    
    <Navbar />
    <router-view></router-view> <!-- routing에 따른 컴포넌트 렌더링 역할 -->
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: { Navbar },
  data () {
    return {
      msg: 'Hello World'
    }
  }
}
</script>

<style>

</style>
