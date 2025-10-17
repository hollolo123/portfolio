<template>
  <section>
    <div class="contents">
      <div class="inner">
        <Title title="Project" />
        <div class="proj__wrapper">
          <div class="proj__tab">
            <ul>
              <li class="active">All</li>
              <li>Team</li>
              <li>Personal</li>
            </ul>
          </div>
          <div class="proj__box__wrapper">
            <div 
              v-for="project in projectData" 
              :key="project.id" 
              class="proj__box">
              <div class="item">
                <a :href="project.url" target="_blank">
                  <div class="proj__thumbnail">
                    <img :src="project.thumbnail" :alt="project.name">
                  </div>
                  <div class="proj__title">
                    <p class="tit">{{ project.name }}</p>
                    <p class="desc">{{ project.description }}</p>
                    <div class="skill">
                      <span v-for="keyword in project.keyword" 
                      :key="keyword">{{ keyword }}</span>
                    </div>
                    <button class="btn_site">사이트 바로가기</button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from '@/components/common/TitleComp.vue';
import projectData from '@/data/project/project.js';

export default {
  components: {
    Title
  },
  data() {
    return {
      projectData
    }
  },
  
}
</script>

<style lang="scss">
  @use '@/styles/layout/project' as *;
</style>