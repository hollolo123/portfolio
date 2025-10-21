<template>
  <div id="main__wrap">
    <Intro />
    <Experience />
    <Project />
    <Comment />
  </div>
</template>

<script>
import Intro from './Intro.vue'
import Experience from './Experience.vue'
import Project from './Project.vue'
import Comment from './Comment.vue'

export default {
  components: {
    Intro,
    Experience,
    Project,
    Comment
  },
  
}
</script>

<style lang="scss" scoped>
</style>