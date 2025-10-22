<template>
  <section id="experience" class="dark">
    <div class="contents">
      <div class="inner">
        <!-- title : component -->
        <Title title="My Experience" />
        <div class="exp__wrapper">
          <!-- skill & tools -->
          <h3>Skill & Tools</h3>
          <div class="exp__wrap">
            <div class="exp__box">
              <ul>
                <li class="tit">Frontend Dev</li>
                <li class="skill">JavaScript, JQuery, Vue, React, mySql</li>
                <li class="icon">
                  <span><img src="@/assets/images/icon/JavaScript.svg" alt="Javascript"></span>
                  <span><img src="@/assets/images/icon/jQuery.svg" alt="jQuery"></span>
                  <span><img src="@/assets/images/icon/React.svg" alt="React"></span>
                  <span><img src="@/assets/images/icon/Vue.svg" alt="Vue"></span>
                  <span><img src="@/assets/images/icon/MySQL.svg" alt="MySQL"></span>
                </li>
                <li class="txt">
                  Vue, React등 다양한 프레임워크를<br/> 
                  활용하여 동적인 효과를 구현 할 수 있습니다.
                </li>
              </ul>
            </div>
            <div class="exp__box"> 
              <ul>
                <li class="tit2">Web Design</li>
                <li class="skill">HTML5, CSS3, SCSS</li>
                <li class="icon">
                  <span><img src="@/assets/images/icon/HTML5.svg" alt="HTML5"></span>
                  <span><img src="@/assets/images/icon/CSS3.svg" alt="CSS3"></span>
                  <span><img src="@/assets/images/icon/Sass.svg" alt="Sass"></span>
                </li>
                <li class="txt">
                  웹표준, 웹접근성을 중심의<br/>
                  웹 페이지를 구현 할 수<br/> 
                  있습니다.
                </li>
              </ul>
            </div>
            <div class="exp__box">
              <ul>
                <li class="tit3">Tool</li>
                <li class="skill">PhotoShop, adobeXD, Figma, VSCode</li>
                <li class="icon">
                  <span><img src="@/assets/images/icon/Photoshop.svg" alt="Photoshop"></span>
                  <span><img src="@/assets/images/icon/AdobeXD.svg" alt="AdobeXD"></span>
                  <span><img src="@/assets/images/icon/Figma.svg" alt="Figma"></span>
                  <span><img src="@/assets/images/icon/VsCode.svg" alt="VsCode"></span>
                </li>
                <li class="txt">
                  프로그램의 기본 기능을 전반적으로<br/>
                  다룰 수 있으며 다양한 도구를 사용하여<br/>
                  디자인을 구현할 수 있습니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="exp__wrapper">
          <!-- career -->
          <Title subtitle="Career & Education" />
          <div class="exp__wrap">
            <ExpBoxComp 
              date="2011.02~2013.02" 
              company="(주)스마일웹" 
              team="디자인팀" 
              txt1="쇼핑몰 사이트 및 타사 웹 디자인 작업" 
              txt2="HTML, CSS를 활용해 웹 표준, 웹접근성 중심의 웹 사이트 퍼블리싱">
            </ExpBoxComp>
            <ExpBoxComp 
              date="2013.05~2024.12" 
              company="(주)누림소프트" 
              team="디자인팀" 
              txt1="통계청 나라통계, KOSIS, 국가지표체계 등 다수의 프로젝트 참여" 
              txt2="HTML, CSS를 활용해 웹 표준, 웹접근성 중심의 웹 사이트 퍼블리싱">
            </ExpBoxComp>
            <ExpBoxComp 
              date="2025.04~2025.11" 
              company="세잔직업전문학교" 
              team="교육 및 훈련" 
              txt1="프론트엔드 개발 과정 교육" 
              txt2="HTML, CSS, JavaScript, Vue, React, Node.js, db등">
            </ExpBoxComp>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from '@/components/common/TitleComp.vue';
import ExpBoxComp from '@/components/common/ExpBoxComp.vue';
export default {
  components: {
    Title,
    ExpBoxComp
  }
}
</script>

<style lang="scss" scoped>
  @use '@/styles/layout/experience' as *;

</style>