<template>
  <section id="intro">
    <div class="contents">
      <div class="main__title">
        <div class="typing__text">
          {{ displayText }}
          <span class="cursor">|</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { onMounted, ref } from 'vue';

  export default {
    setup() {
      let displayText = ref('');
      onMounted(() => {
        typeText();
      })

      const typeText = () => {
        let text = 'FRONTEND\nDEVELOPER\n&\n UI/UX DESIGNER';
        let i = 0;
        const interval = setInterval(() => {
          displayText.value = text.slice(0, i);
          i++;
          if (i > text.length) {
            clearInterval(interval);
          }
        },180);
      }
      return {
        displayText
      }
    }
  }

</script>

<style lang="scss">
  @use '@/styles/sections/intro' as *;
  @use '@/styles/layout/layout' as *;
</style>