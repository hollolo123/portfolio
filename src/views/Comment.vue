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
            상상을 현실의 인터페이스로 연결하는<br/>
            <strong>웹디자이너 겸 퍼블리셔 박수림</strong> 입니다.
          </p>
          <p>
            <strong>디자인의 심미성과 웹 표준의 견고함</strong> 을 동시에 추구하며,<br/>
            <strong>프론트엔드 역량</strong> 을 더해 더 넓은 기술적 지평을 넓혀가고 있습니다.
          </p>
          <p>
            <strong>준비된 감각과 탄탄한 실력</strong> 을 바탕으로, <br/>
            팀과 함께 더 나은 내일의 웹을 그려나가고 싶습니다.
          </p>
        </div>
        <div class="commt__sns">
          <p>궁금한 사항은 카카오톡 또는 이메일로 편하게 문의해주세요.</p> 
          <button type="button" @click="openKakaoTalk()"><font-awesome-icon icon="fa-brands fa-kakao-talk" />kakaoTalk</button>
          <button type="button" @click="openEmail()"><font-awesome-icon icon="fa-solid fa-paper-plane" />e-mail</button>
          <button type="button" @click="openGithub()"><font-awesome-icon icon="fa-brands fa-github" />github</button>
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
    methods : {
      openKakaoTalk() {
        window.open('https://open.kakao.com/o/sGTzApci', '_blank');
      },
      openEmail() {
        window.open('mailto:hollolo123@gmail.com', '_blank');
      },
      openGithub() {
        window.open('https://github.com/hollolo123', '_blank')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @use '@/styles/sections/comment' as *;
</style>