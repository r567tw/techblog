<template>
  <div id="app">
    <Header/>
    <div class="container">
        <br/>
        <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'app',
  components:{
    Header,
    Footer
  }
}
</script>



<style>
  html,body,#app{
    height: 100%;
  }
</style>



