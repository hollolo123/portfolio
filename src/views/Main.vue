<template>
  <div id="main__wrap">
    <section>
      <Intro />
    </section>
    <section>
      <Experience />
    </section>
    <section>
      <Project />
    </section>
    <section>
      <Comment />
    </section>
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
  data() {
    return {
      name : 'Main',
    }
  }
}
</script>

<style scoped>
</style>