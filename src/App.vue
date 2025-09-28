<template>
  <div id="wrap">
    <Header />
    <main id="main">
      <Intro />
      <Experience />
      <Project />
    </main>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Intro from './views/Intro.vue';
  import Experience from './views/Experience.vue';
  import Project from './views/Project.vue';

  export default {
    components : {
      Header,
      Intro,
      Experience,
      Project,
    }
  }
</script>

<style scoped>

</style>
