<template>
  <section>
    <div class="contents">
      <div class="inner">
        <div class="main__slogan ">
          <h2>FRONT-END</h2>
          <h3>Developer & UI designer</h3>
          <p class="text">
            <span class="typing-text">{{ displayText }}</span>
            <span class="cursor">|</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      fullText: `안녕하세요.
디자인과 개발을 아우르는
성장형 프론트엔드 개발자 박수림 입니다.

오랜 UI Design 경험을 바탕으로 사용자 중심의
보다 완성도 높은 서비스를 만들어 가겠습니다.`,
      displayText: '',
      currentIndex: 0,
      typingSpeed: 50,
      isTyping: true
    }
  },
  mounted() {
    this.startTyping()
  },
  methods: {
    startTyping() {
      if (this.currentIndex < this.fullText.length) {
        this.displayText += this.fullText.charAt(this.currentIndex)
        this.currentIndex++
        setTimeout(() => {
          this.startTyping()
        }, this.typingSpeed)
      }
    }
  }
}
</script>

<style lang="scss">
  @use '@/styles/layout/intro' as *;
  @use '@/styles/layout/layout' as *;

  .typing-text {
    white-space: pre-line;
  }
  
  .cursor {
    animation: blink 1s infinite;
    font-weight: 300;
  }
  
  @keyframes blink {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0;
    }
  }
</style>