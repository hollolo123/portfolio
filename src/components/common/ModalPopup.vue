<template>
  <div class="modal__popup">
    <div class="modal__content">
      <h3>{{ this.modalData.name }}</h3>
      <button @click="changeModalState" class="btn__close">
        <span class="pi pi-times"></span>
      </button>
      <p class="modal__desc__intro">{{  this.modalData.descintro }}</p>
      <div class="btn__site">
        <a :href="modalData.url" target="_blank">
          <font-awesome-icon icon="fa-solid fa-check-to-slot" />
          <span>사이트 바로가기</span>
        </a>
        <a :href="modalData.github" target="_blank" >
          <font-awesome-icon icon="fa-brands fa-github" />
          <span>깃허브 바로가기</span>
        </a>
      </div>
      <div class="modal__inner">
        <p class="modal__desc__ref">{{  this.modalData.descref }}</p>
        <div>
          <p class="modal__desc__title">🎯 핵심 전략</p>
          <ul class="modal__desc__list">
            <li v-for="strategy in modalData.descstrategy" :key="strategy">
              <span class="point">{{ strategy.title }}</span> : {{ strategy.description }}
            </li>
          </ul>
        </div>
        <div>
          <p class="modal__desc__title">✅ 역할 및 경험</p>
          <ul class="modal__desc__list">
            <li v-for="role in modalData.descrole" :key="role">
              {{ role }}
            </li>
          </ul>
        </div>
        <div>
          <p class="modal__desc__title">🛠️ 구현기능</p>
          <ul class="modal__desc__list">
            <li v-for="feature in features" :key="feature">
              {{ feature }}
            </li>
          </ul>
        </div>
        <div>
          <p class="modal__desc__title">✏️ 사용기술 및 언어</p>
          <ul class="modal__desc__list">
            <li>
              <span class="title">Frontend</span>
              <span v-for="stack in frontendStacks" :key="stack" class="label">{{ stack }}</span>
            </li>
            <li>
              <span class="title">Tools</span>
              <span v-for="tool in toolsStacks" :key="tool" class="label">{{ tool }}</span>
            </li>
          </ul>
        </div>
        <div>
          <p class="modal__desc__title">💻 결과물</p>
          <ul>
            <li>
              <img :src="modalData.detailimg" :alt="modalData.name">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      features : this.modalData?.descfeature,
      frontendStacks : this.modalData?.desctech.frontend,
      toolsStacks : this.modalData?.desctech.tools
    }
  },
  props: {
    modalData: {
      type: Object,
      required: true
    }
  },
  emits : [
    'change-modal-state'
  ],
  methods : {
    changeModalState() {
      this.$emit('change-modal-state', []);
    }
  }
}
</script>