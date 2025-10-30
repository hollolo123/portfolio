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
              v-for="project in filterData" 
              :key="project.id" 
              class="proj__box">
              <div class="item" >
                <a
                  :href="project.popup"
                  @click="changeModalState(project.id)" 
                  class="proj__item-link"
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
                    <div class="btn_site">
                      <span>Show Project</span>
                      <span class="arr-icon1"></span>
                    </div>
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
import '@/styles/sections/project.scss';

export default {
  data() {
    return {
      projectData,
      selectedTpye : 'all',
    }
  },
  components: {
    Title,

  },
  emits : [
    'change-modal-state',
  ],
  methods : {
    changeModalState(id) {
      this.$emit('change-modal-state', projectData[id - 1]);
    }
  },
  computed : {
    filterData() {
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