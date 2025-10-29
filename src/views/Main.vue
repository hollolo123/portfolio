<template>
  <div id="main__wrap">
    <Intro />
    <Aboutme />
    <Experience />
    <Project 
      @change-state="changePopState"
    />
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
  emits : [
    'change-state',
  ], 
  methods : {
    changePopState(project) {
      this.$emit('change-state', project) // 매개변수
    }
  }
}
</script>

<style lang="scss" scoped>
</style>