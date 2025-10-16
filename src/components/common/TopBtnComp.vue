<template>
  <div id="topBtn" :class="{ scrolled : isScrolled }">
    <button type="button" @click="scrollTop">
      <i class="pi pi-arrow-up"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isScrolled : false
    }
  },
  methods : {
    scrollTop() {
      window.scrollTo({
        top:0,
        behavior:'smooth'
      })
    },
    scrolledHandler() {
      this.isScrolled = window.scrollY > 200;
    }
  },
  mounted() {
    // page load 후 scrolledHandler 이벤트 등록
    window.addEventListener( 'scroll', this.scrolledHandler);
  },
  beforeUnmount() {
    // component에서 사라질때 이벤트 제거 (메모리 누수 방지)
    window.removeEventListener('scroll', this.scrolledHandler);
  }
  
}
</script>


<style lang="scss">
  @use '@/styles/common/common' as *; 
</style>