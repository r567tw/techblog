<template>
<div>
  <div v-show="!postsLoading">
    <div class="columns">
      <div class="is-size-6">
      <div class="card" v-for="(article,key) in articles" v-bind:key="key">
        <header class="card-header">
          <div class="card-title">
            <h2 class="card-header-title" v-html="article.title.rendered"></h2>
          </div>
        </header>
        <div class="card-content">
          <div class="content">
            <p v-html="excerpt(article.excerpt.rendered)"></p>
            <div class="has-text-right">
              <a :href="article.link" class="button is-success is-outlined">看的不順眼? 請到此</a>
              <a class="button is-info is-outlined" @click="showmodel(key)">繼續閱讀</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
  <Article :showArticle="showArticle" @close="closeModal"/>
  <div class="text-center" v-show="postsLoading">
        <Loading/>
  </div>
  <div class="text-center" v-show="errorHandle">
        <p>Woops! 好像有一些問題，請直接進入入<a href="https://r567tw.tw">樂在信仰中主站</a>觀看相關技術文章</p>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import Article from './Article'
import Loading from './Loading'

export default {
  created: function(){
    this.getPosts()
  },
  components:{
    Article,
    Loading
  },
  data () {
    return {
      postsLoading:true,
      errorHandle:false,
      showArticle:'',
      articles:[],
    }
  },
  methods: {
    getPosts(){
      this.postsLoading = true
      var url ="https://r567tw.tw/wp-json/wp/v2/posts?categories=4"
      axios.get(url)
        .then(response => {
          console.log(response.data)
          this.articles = response.data
          this.postsLoading = false
        })
        .catch(error => {
          console.log(error)
          this.errorHandle = true;
        })
    },
    showmodel(key){
      this.showArticle = 'is-active'
      this.$children[0].article = this.articles[key]
    },
    excerpt(content){
      return content.slice(0,-14);
    },
    closeModal(){
      this.showArticle = ''
    }
  }
}
</script>

<style scoped>
.card{
  margin-bottom: 2.5%
}

.card-title{
  margin-left: 0.5%
}
</style>


