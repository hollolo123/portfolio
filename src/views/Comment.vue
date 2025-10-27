<template>
  <section id="comment" class="comment">
    <div class="contents">
      <div class="inner">
        <div class="quotes">
          <span class="quotes__icon"></span>
          <span class="quotes__icon"></span>
        </div>
        <div class="commt__text">  
          <p>
            프론트엔드 영역으로 역량을 확장하며, <br/> 
            디자인과 개발의 흐름을 함께 이해하는 실무형 인재로 성장하고 있습니다.
          </p>
          <p>
            변화하는 웹 환경 속에서 새로운 기술을 적극적으로 학습하여<br/>
            더 나은 사용자 경험을 구현하기 위해 노력하고 있습니다.
          </p>
          <p>
            그동안의 디자인 감각과 학습한 기술적 이해를 융합해<br/>
            함께 성장할 수 있는 방향으로 기여하고자 합니다.
          </p>
        </div>
        <div class="commt__sns">
          <p>궁금한 사항은 카카오톡 또는 이메일로 편하게 문의해주세요.</p> 
          <button type="button" href="#"><font-awesome-icon icon="fa-brands fa-kakao-talk" />kakaoTalk</button>
          <button type="button" href="#"><font-awesome-icon icon="fa-solid fa-paper-plane" />e-mail</button>
          <button type="button" href="#"><font-awesome-icon icon="fa-brands fa-github" />github</button>
        </div>
      </div>
      <!-- Wave container -->
      <div class="waves__container">
        <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
          <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
          </defs>
          <g class="parallax">
            <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(19,19,21, 0.5)" />
            <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(19,19,21, 0.4)" />
            <use xlink:href="#gentle-wave" x="48" y="7" fill="rgba(19,19,21, 0.3)" />
            <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(19,19,21, 0.1)" />
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