<template>
<div>
  <div>
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="profile.image" alt="image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img :src="profile.photo" alt="photo">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{ profile.name }}</p>
            <p class="subtitle is-6"><a :href="profile.fb">@{{ profile.fb_title }}</a></p>
          </div>
        </div>

        <div class="content">
          {{ profile.quote }}
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import profile from '../data/profile.json'

export default {
  data () {
    return {
      profile :profile
    }
  }
}
</script>

<style scoped>
.card{
  margin-bottom: 2.5%
}
</style>




