<template>
  <header>
    <div id="header" :class="{ scrolled : isScrolled }">
      <div class="header__in">
        <div class="logo"><a href="#intro" @click.prevent="scrollToSection('intro')">&lt;Park Su-rim /&gt;</a></div>
        <div class="gnb">
          <button class="gnb__btn" :class="{ active : isActive }" @click="gnbHandler">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul :class="{ active : isActive }">
            <li><a href="#aboutme" @click.prevent="scrollToSection('aboutme')"><span>About</span></a></li>
            <li><a href="#experience" @click.prevent="scrollToSection('experience')"><span>Experience</span></a></li>
            <li><a href="#project" @click.prevent="scrollToSection('project')"><span>Project</span></a></li>
            <li><a href="#Comment" @click.prevent="scrollToSection('comment')"><span>Comment</span></a></li>
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

      document.body.classList.toggle('open');
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 50;
    },
    // section 이동
    scrollToSection(sectionId) {
      const ele = document.getElementById(sectionId);
      const main = document.querySelector('#main__wrap');

      // sectionId 기준 
      if(sectionId !== 'intro') {
        const headerHeight = document.getElementById('header').offsetHeight;  // header height
        const elePosition = ele.offsetTop - headerHeight; // ele.Y축 위치값 - header 높이값
  
        window.scrollTo({
          top : elePosition, 
          behavior : 'smooth'
        })
      } else if (sectionId === 'intro') {
        // sticky 기준은 #main__wrap 안에서 스크롤 되니까
        // 해결책 : #main__wrap.offsetTop = 0
        // Top을 #main__wrap.offsetTop 지정
        window.scrollTo({
          top: main.offsetTop,
          behavior : 'smooth'
        })
      } else {
        alert('section ID가 존재하지 않습니다.')
      }
  
      // 모바일 메뉴 열려있을때 닫기 
      if( this.isActive ) {
        this.isActive = false;
        document.body.classList.remove('open');
      }
    },

  },
  /* scroll event 등록 */
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  /* 이벤트 제거 */
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.body.classList.remove('open');
  }
}
</script>

<style lang="scss">
  @use '@/styles/layout/header' as *;
</style>