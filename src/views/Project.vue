<template>
  <section id="project">
    <div class="contents">
      <div class="inner">
        <Title title="Project" />
        <div class="proj__wrapper">
          <div class="proj__tab">
            <ul>
              <li 
                :class="{ active : selectedTpye === 'all' }"
                @click="selectedTpye = 'all'"
              >
                All
              </li>
              <li 
                :class="{ active : selectedTpye === 'team'}"
                @click="selectedTpye = 'team'"
              >
                Team
              </li>
              <li
                :class="{ active : selectedTpye === 'personal'}"
                @click="selectedTpye = 'personal'"
              >
                Personal
              </li>
            </ul>
          </div>
          <div class="proj__box__wrapper">
            <div 
              v-for="project in filterTab" 
              :key="project.id" 
              class="proj__box">
              <div class="item" >
                <router-link 
                  :to="project.popup"
                  @click="changePopState(project)"
                >
                  <div class="proj__thumbnail">
                    <img :src="project.thumbnail" :alt="project.name">
                  </div>
                  <div class="proj__title">
                    <p class="tit">{{ project.name }}</p>
                    <p class="type">{{ project.type }}</p>
                    <p class="desc">{{ project.description }}</p>
                    <div class="skill">
                      <span v-for="keyword in project.keyword" 
                      :key="keyword">{{ keyword }}</span>
                    </div>
                    <button class="btn_site">
                      <router-link 
                        :to="project.url"
                        target="_blank"
                      >
                        <span>Show Project</span>
                        <span class="arr-icon1"></span>
                      </router-link>
                    </button>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
          <ModalPopup v-if="popState" @close="changePopState()" :modalData="modalData" />        
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from '@/components/common/TitleComp.vue';
import ModalPopup from '@/components/common/ModalPopup.vue';
import projectData from '@/data/project/project.js';
import '@/styles/layout/project.scss';

export default {
  data() {
    return {
      projectData,
      selectedTpye : 'all',
      popState : false,
      modalData : null
    }
  },
  components: {
    Title,
    ModalPopup
  },
  methods : {
    changePopState(project) {
      this.popState = !this.popState;
      if (project) {
        this.modalData = project;
        
        // 모달창 열렸을 때 스크롤 바 hidden
        document.body.style.overflow = 'hidden';  
        // TopBtn 숨기기
        document.getElementById('topBtn').classList.add('hide');
        } 
        // 닫혔을때 auto
        else {
          document.body.style.overflow = 'auto';
          // TopBtn 보이기
          document.getElementById('topBtn').classList.remove('hide');
        } 
    },
  },
  computed : {
    filterTab() {
      if(this.selectedTpye === 'all') {
        return projectData
      }
      return this.projectData.filter(proj => proj.type === this.selectedTpye);
    }
  }
  
}
</script>

<style lang="scss" scoped>

</style>