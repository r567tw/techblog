<template>
<div>
<div class="modal is-full" :class="showArticle">
  <div @click="close" class="modal-background"></div>
  <div class="modal-card" v-show="article">
    <header class="modal-card-head">
      <p class="modal-card-title" v-html="article.title.rendered"></p>
      <button class="delete" aria-label="close" @click="close"></button>
    </header>
    <section class="modal-card-body">
      <div>
        <p  v-html="article.content.rendered"></p>
      </div>
    </section>
    <footer class="modal-card-foot">
        <a :href="article.link" class="button is-success is-outlined">看的不順眼? 請到此</a>
        <button class="button is-info" @click="close">關閉</button>
    </footer>
  </div>
</div>
</div>
</template>

<script>

export default {
  props:['showArticle'],
  data(){
    return {
      article:{}
    }
  },
  methods:{
    close(){
      this.$emit('close')
    }
  }

}
</script>

<style scoped>

.modal-card-foot{
  justify-content: flex-end;
}

</style>


