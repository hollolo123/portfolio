<template>
  <div id="wrap">
    <ModalPopup 
      v-if="popState" 
      @changePopState="changePopState()" 
      @close="changePopState()" 
      :modalData="modalData" 
    />
    <Header />
    <Main />
    <Footer />
    <TopBtnComp />
  </div>
</template>

<script>
  import ModalPopup from './components/common/ModalPopup.vue';
  import Header from './components/layout/Header.vue';
  import Main from './views/Main.vue';
  import Footer from './components/layout/Footer.vue';
  import TopBtnComp from './components/common/TopBtnComp.vue';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import 'primeicons/primeicons.css';

  export default {
    components : {
      ModalPopup,
      Header,
      Main,
      Footer,
      TopBtnComp,
      FontAwesomeIcon
    },
    data() {
      return {
        popState : false,
        modalData : []
      }
    },

    methods : {
      changePopState(project) {
        this.popState = !this.popState;
        if(project) {
          this.modalData = project;

          // 모달창 열렸을 때 스크롤 바 hidden
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'auto';
        }
      },
    }
  }
</script>

<style scoped>

</style>
