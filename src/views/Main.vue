<template>
  <div id="main__wrap">
    <Intro />
    <Aboutme />
    <Experience />
    <Project />
    <Comment />
  </div>
</template>

<script>
import Intro from './Intro.vue'
import Aboutme from './Aboutme.vue'
import Experience from './Experience.vue'
import Project from './Project.vue'
import Comment from './Comment.vue'

export default {
  components: {
    Intro,
    Aboutme,
    Experience,
    Project,
    Comment
  },
  
}
</script>

<style lang="scss" scoped>
</style>