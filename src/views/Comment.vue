<template>
  <section id="comment" class="comment">
    <div class="contents">
      <div class="inner" >
        <!-- <p class="title">"디자인과 개발을 유기적으로 연결하며<br/>
          성장하는 인재, 박수림입니다."</p> -->
        <p class="commt">
          <!-- 웹디자인 분야에서 다양한 프로젝트를 수행하며 사용자 중심의 UI/UX 설계 역량을 쌓아왔습니다.<br/>
          그 과정에서 시각적인 완성도를 높이는 것을 넘어, 데이터를 기반으로 한 피드백 분석과 개선이<br/> 
          서비스 품질을 결정짓는 핵심이라는 점을 체감했습니다.<br/>  -->
          <br/>
          프론트엔드 영역으로 역량을 확장하며, <br/> 
          디자인과 개발의 흐름을 함께 이해하는 실무형 인재로 성장하고 있습니다. 
          <br/><br/> 
          변화하는 웹 환경 속에서 새로운 기술을 적극적으로 학습하여<br/>
          더 나은 사용자 경험을 구현하기 위해 노력하고 있습니다.
          <br/><br/>
          앞으로는 그동안의 디자인 감각과 학습한 기술적 이해를 융합해<br/>
          함께 성장할 수 있는 방향으로 기여하고자 합니다.
        </p>
      </div>
      <!-- Wave container -->
      <div class="waves__container">
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
          </defs>
          <g class="parallax">
            <!-- <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(43,160,111,0.6"/>
            <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(43,160,111,0.3)"/>
            <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(47,102,255,0.6)"/>
            <use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(47,102,255,0.3)"/> -->
            <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(197,186,158, 0.8)" />
            <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(28,28,29,0.1)" />
            <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(28,28,29,0.3)" />
            <use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(197,186,158, 0.6)" />
          </g>
        </svg>
      </div>
      <!-- Wave end -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'Comment'
}
</script>

<style lang="scss" scoped>
  @use '@/styles/sections/comment' as *;
</style>