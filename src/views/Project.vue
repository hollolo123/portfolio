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
          <!-- 관찰 대상 요소에 ref 추가 -->
          <div ref="projectWrapperRef" class="proj__box__wrapper">
            <div 
              v-if="filterData.length > 0"
              v-for="(project, index) in filterData" 
              :key="project.id" 
              :class="['proj__box', {'is-visible' : isSectionVisible}]"
              :style="{'animation-delay' : isSectionVisible ? index * 0.3 + 's' : '0s'}"
              >
              <div class="item" >
                <a
                  :href="project.popup"
                  @click="changeModalState(project.id)" 
                  class="proj__item-link"
                > 
                  <div class="proj__thumbnail">
                    <p class="proj__desc">{{ project.description }}</p>
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
import { ref, onMounted, onUnmounted } from 'vue'; 

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
  }, 

  setup() {
    const projectWrapperRef = ref(null); // wrapper ele 참조할 ref
    const isSectionVisible = ref(false);  //  섹션 진입 상태

    let observer = null;

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          isSectionVisible.value = true;
          if (observer) {
            observer.unobserve(entry.target);
          }
        }
      });
    };

    onMounted(() => {
      observer = new IntersectionObserver(handleIntersection, {
        root : null,
        rootMargin : '0px',
        threshold : 0.2
      });

      if (projectWrapperRef.value) {
        observer.observe(projectWrapperRef.value);
      }
    });

    onUnmounted(() => {
      if (observer && projectWrapperRef.value) {
        observer.unobserve(projectWrapperRef.value);
      }
    });

    return {
      projectWrapperRef,
      isSectionVisible
    }
  }
}
</script>

<style lang="scss" scoped>
  .proj__box {
    opacity: 0;
    transform: translateY(0px);
    transition: opacity 0.1s ease-out, transform 0.1s ease-out;
    animation-fill-mode: forwards;
  }
  .proj__box.is-visible {
    opacity: 1;
    transform: translateY(0);
  }
</style>