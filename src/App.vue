<template>
  <div id="wrap">
    <ModalPopup 
      v-if="isModalOpen" 
      @change-modal-state="changeModalState"
      :modalData="modalData" 
    />
    <Header />
    <Main @change-modal-state="changeModalState" />
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
        isModalOpen : false,
        modalData : []
      }
    },

    methods : {
      /**
       * changeModalState Modal 상태 변경 관련 함수
       * @description Modal isModalOpen 따라 Modal이 열리고 닫는 기능
       * @param project 
       */
      changeModalState(project) {
        this.isModalOpen = !this.isModalOpen;

        if(this.isModalOpen) {   
          this.modalData = project;

          // 모달창 열렸을 때 스크롤 바 hidden
          document.body.style.overflow = 'hidden';
        } else {
          // 모달창 닫힐 때 스크롤 바 복원
          document.body.style.overflow = 'initial';
        }    
      }
    }
  }
</script>

<style scoped>

</style>
