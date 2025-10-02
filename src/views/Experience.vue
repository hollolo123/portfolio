<template>
  <section class="dark">
    <div class="contents">
      <div class="inner">
        <!-- title : component로 구성하기 -->
        <h2>My Experience</h2>
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
                <li class="txt">다양한 메서드와 기능을 활용하여 
                웹 페이지의 동적인 효과를 
                구현 할 수 있습니다. </li>
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
                <li class="txt">다양한 메서드와 기능을 활용하여 
                웹 페이지의 동적인 효과를 
                구현 할 수 있습니다. </li>
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
                <li class="txt">다양한 메서드와 기능을 활용하여 
                웹 페이지의 동적인 효과를 
                구현 할 수 있습니다. </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="exp__wrapper">
          <!-- career -->
          <h3>Career</h3>
          <div class="exp__wrap">
            <div class="exp__box">
              <ul>
                <li class="date">2011.02~2013.02</li>
                <li class="company">(주)스마일웹</li>
                <li>디자인팀</li>
                <li class="txt">
                  <ul>
                    <li>쇼핑몰 사이트 및 타사 웹 디자인 작업</li>
                    <li>HTML, CSS를 활용해 웹 표준, 웹접근성 
                      중심의 웹 사이트 퍼블리싱</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="exp__box">
              <ul>
                <li class="date">2013.05~2024.12</li>
                <li class="company">(주)누림소프트</li>
                <li>디자인팀</li>
                <li class="txt">
                  <ul>
                    <li>통계청 나라통계, KOSIS, 국가지표체계 등 
                      다수의 프로젝트 참여</li>
                    <li>HTML, CSS를 활용해 웹 표준, 웹접근성 
                      중심의 웹 사이트 퍼블리싱</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="exp__wrapper">
          <!-- Education -->
          <h3>Education</h3>
          <div class="exp__wrap">
            <div class="exp__box">
              <ul>
                <li class="date">2025.04~2025.11</li>
                <li class="company">교육 및 훈련</li>
                <li>세잔직업전문학교</li>
                <li class="txt">
                  <ul>
                    <li>프론트엔드 개발 과정 교육</li>
                    <li>HTML, CSS, JavaScript, Vue, React, Node.js, db등</li>
                  </ul>
                </li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

</script>

<style lang="scss">
  @use '@/styles/layout/experience' as *;

</style>