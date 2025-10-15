<template>
  <header>
    <div id="header" :class="{ scrolled : isScrolled }">
      <div class="header__in">
        <div class="logo"><a href="#">&lt;Park Su-rim /&gt;</a></div>
        <div class="gnb">
          <button class="gnb__btn" :class="{ active : isActive }" @click="gnbHandler">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul :class="{ active : isActive }">
            <li><a href="#intro">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#project">Project</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isActive : false,
      isScrolled : false
    }
  },
  methods : {
    gnbHandler() {
      this.isActive = !this.isActive;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    }
  },
  /* scroll event 등록 */
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  /* 이벤트 제거 */
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss">
  @use '@/styles/layout/header' as *;
</style>