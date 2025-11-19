<template>
  <section id="experience" ref="experienceSection" class="dark">
    <div class="contents">
      <div class="inner">
        <!-- title : component -->
        <Title title="My Experience" />
        <div class="exp__wrapper">
          <!-- skill & tools -->
          <h3>Skill & Tools</h3>
          <div class="exp__wrap">
            <div 
              ref="expBox1"
              :class="{'fade-in':visibleBoxes.includes(1)}"
              class="exp__box"
            >
              <ul>
                <li class="tit">Frontend Dev</li>
                <li class="skill">JavaScript, JQuery, Vue, React, mySql</li>
                <li class="icon">
                  <span><img src="@/assets/images/icon/JavaScript.svg" alt="Javascript"></span>
                  <span><img src="@/assets/images/icon/jQuery.svg" alt="jQuery"></span>
                  <span><img src="@/assets/images/icon/Vue.svg" alt="Vue"></span>
                  <span><img src="@/assets/images/icon/React.svg" alt="React"></span>
                  <span><img src="@/assets/images/icon/MySQL.svg" alt="MySQL"></span>
                </li>
                <li class="txt">
                  Vue, React등 다양한 프레임워크를
                  활용하여 동적인 효과를 구현할 수 있습니다.
                </li>
              </ul>
            </div>
            <div 
              ref="expBox2"
              :class="{'fade-in':visibleBoxes.includes(2)}"  
              class="exp__box"
            > 
              <ul>
                <li class="tit">Web Design</li>
                <li class="skill">HTML5, CSS3, SCSS</li>
                <li class="icon">
                  <span><img src="@/assets/images/icon/HTML5.svg" alt="HTML5"></span>
                  <span><img src="@/assets/images/icon/CSS3.svg" alt="CSS3"></span>
                  <span><img src="@/assets/images/icon/Sass.svg" alt="Sass"></span>
                </li>
                <li class="txt">
                  웹표준, 웹접근성을 중심의
                  웹 페이지를 구현할 수 있습니다.
                </li>
              </ul>
            </div>
            <div 
              ref="expBox3"
              :class="{'fade-in':visibleBoxes.includes(3)}"
              class="exp__box"
            >
              <ul>
                <li class="tit">Tool</li>
                <li class="skill">PhotoShop, adobeXD, Figma, VSCode</li>
                <li class="icon">
                  <span><img src="@/assets/images/icon/Photoshop.svg" alt="Photoshop"></span>
                  <span><img src="@/assets/images/icon/AdobeXD.svg" alt="AdobeXD"></span>
                  <span><img src="@/assets/images/icon/Figma.svg" alt="Figma"></span>
                  <span><img src="@/assets/images/icon/VsCode.svg" alt="VsCode"></span>
                </li>
                <li class="txt">
                  프로그램의 기본 기능을 전반적으로
                  다룰 수 있으며 다양한 도구를 사용하여
                  디자인을 구현할 수 있습니다.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="exp__wrapper">
          <!-- career -->
          <h3>Career & Education</h3>
          <div class="exp__wrap">
            <ExpBoxComp 
              ref="expBox4"
              :class="{'fade-in':visibleBoxes.includes(4)}"
              date="2011.02~2013.02" 
              company="(주)스마일웹" 
              team="디자인팀" 
              txt1="쇼핑몰 사이트 및 타사 웹 디자인 작업" 
              txt2="HTML, CSS를 활용해 웹 표준, 웹접근성 중심의 웹 사이트 퍼블리싱">
            </ExpBoxComp>
            <ExpBoxComp 
              ref="expBox5"
              :class="{'fade-in':visibleBoxes.includes(5)}"
              date="2013.05~2024.12" 
              company="(주)누림소프트" 
              team="디자인팀" 
              txt1="통계청 나라통계, KOSIS, 국가지표체계 등 다수의 프로젝트 참여" 
              txt2="HTML, CSS를 활용해 웹 표준, 웹접근성 중심의 웹 사이트 퍼블리싱">
            </ExpBoxComp>
            <ExpBoxComp 
              ref="expBox6"
              :class="{'fade-in':visibleBoxes.includes(6)}"
              date="2025.04~2025.11" 
              company="대전세잔직업전문학교" 
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
import {ref, onMounted} from 'vue';

export default {
  components: {
    Title,
    ExpBoxComp
  },
  setup() {
    const visibleBoxes = ref([]);
    const experienceSection = ref(null);
    const expBox1 = ref(null);
    const expBox2 = ref(null);
    const expBox3 = ref(null);
    const expBox4 = ref(null);
    const expBox5 = ref(null);
    const expBox6 = ref(null);

    onMounted(() => {
      // Experience 섹션이 뷰포트에 들어왔는지 관찰
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) { 
            // isIntersecting : 타겟 요소가 루트 요소와 교차상태 Boolean 값(true: 교차, false: 벗어남)
            // 섹션이 뷰포트에 들어왔을 때 박스들을 순차적으로 표시
            const boxIndexes = [1, 2, 3, 4, 5, 6];

            boxIndexes.forEach((boxIndex) => {
              const delay = (boxIndex - 1) * 200; // 각 박스마다 200ms씩 delay
              setTimeout(() => {
                if (!visibleBoxes.value.includes(boxIndex)) {
                  visibleBoxes.value.push(boxIndex);
                }
              }, delay);
            });

            // 한 번만 실행되도록 observer 해제
            // observer.unobserve(entry.target);
          }
        });
      }, {
        // options 설정
        root: null,        // 루트 요소 설정 (null: 뷰포트)
        rootMargin: '0px', // 루트 요소의 마진 설정
        threshold: 0.3     // 섹션의 30%가 보일 때 트리거 (0.3: 30%)
      });

      // 섹션 관찰 시작
      if (experienceSection.value) {
        observer.observe(experienceSection.value);
      }
    });

    return {
      visibleBoxes,
      experienceSection,
      expBox1,
      expBox2,
      expBox3,
      expBox4,
      expBox5,
      expBox6
    };
  }
}
</script>

<style lang="scss" scoped>
  @use '@/styles/sections/experience' as *;

</style>