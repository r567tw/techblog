<template>
<div>
<section class="hero has-text-centered">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        {{ site.title }}
      </h1>
      <h2 class="subtitle">
         {{ site.subtitle }}
      </h2>
    </div>
  </div>
</section>
<div class="tabs is-centered">
  <ul>
    <li v-for="(item,key) in menu" :key="key" :class="{ 'is-active':item.name == $route.name}">
       <router-link :to="item.path">
        <span class="icon is-small"><i :class="item.icon"></i></span>
        <span>{{ item.title }}</span>
      </router-link>
    </li>
  </ul>
</div>
</div>
</template>

<script>
import site from './data/site.json'
import menu from './data/menu.json'

export default{
  data(){
    return {
      menu: menu,
      site: site,
    }
  },
  methods:{
  }
}
</script>
