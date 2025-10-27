<template>
  <section id="intro">
    <!-- <div class="circle__wrap">
      <div class="circle_left">
        <div class="circle1"></div> 
        <div class="circle2"></div> 
      </div>
    </div> -->
    <div class="contents">
      <div class="main__title">
        <p>{{ typedText }}</p>
        <!-- <span class="cursor">|</span> -->
        <!-- <p class="text">
          안녕하세요.<br/>
          디자인과 개발을 아우르는<br/> 
          성장형 프론트엔드 개발자 박수림 입니다.<br/> 
          <br/>
          오랜 UI Design 경험을 바탕으로 사용자 중심의<br/>
          보다 완성도 높은 서비스를 만들어 가겠습니다. 
        </p> -->
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    setup() {
      const typedText = ref('');
      const text = 'FRONTEND DEVELOPER & UI/UX DESIGNER';
      const i = 0;
      return {
        typedText,
      }
    }
  }

</script>

<style lang="scss">
  @use '@/styles/sections/intro' as *;
  @use '@/styles/layout/layout' as *;

</style>