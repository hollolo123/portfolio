<template>
  <div id="main__wrap">
    <Intro />
    <Aboutme />
    <Experience />
    <Project 
      @change-modal-state="changeModalState"
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
    'change-modal-state',
  ], 
  methods : {
    changeModalState(project) {
      this.$emit('change-modal-state', project) // 매개변수
    }
  }
}
</script>

<style lang="scss" scoped>
</style>