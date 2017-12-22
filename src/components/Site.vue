<template>
<div>
  <h1 class="is-size-1">關於{{ site.name }}</h1>
  <p v-html="site.content"></p>
</div>
</template>

<script>
import site from '../data/site.json'

export default {
  data () {
    return {
      site :site
    }
  }
}
</script>

<style scoped>
.card{
  margin-bottom: 2.5%
}
</style>




