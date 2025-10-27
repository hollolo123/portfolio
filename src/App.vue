<template>
  <div id="wrap">
    <Header />
    <Main />
    <Footer />
    <TopBtnComp />
  </div>
</template>

<script>
  import Header from './components/layout/Header.vue';
  import Main from './views/Main.vue';
  import Footer from './components/layout/Footer.vue';
  import TopBtnComp from './components/common/TopBtnComp.vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import 'primeicons/primeicons.css';

  export default {
    components : {
      Header,
      Main,
      Footer,
      TopBtnComp,
      FontAwesomeIcon
    }
  }
</script>

<style scoped>

</style>
