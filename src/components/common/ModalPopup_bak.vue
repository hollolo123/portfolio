<template>
  <div class="modal__popup">
    <div class="modal__content">
      <h3>{{ this.modalData.name }}</h3>
      <button @click="changeModalState" class="btn__close">
        <span class="pi pi-times"></span>
      </button>
      <div class="detail_view">
        <dl>
          <dt>소개</dt>
          <dd>
            <p>{{ this.modalData.descintro}}</p>
          </dd>
          <dt>1. 기획 의도 및 목적</dt>
          <dd>- 복잡했던 기존 교육 정보의 우선순위를 재정비하여, 학교가 제공하는 교육 과정과 핵심 가치를 사용자에게 명확하게 전달하고자 했습니다.</dd>
          <dd>- 교육 수요자가 원하는 정보(수강 신청, 과정 안내)에 가장 빠르게 도달할 수 있는 최적화된 동선을 구축하는 것이 리뉴얼의 핵심 목표였습니다.</dd>
          <dt>기능구현</dt>
          <dd>
            <dl>
              <dd v-for="feature in features" :key="feature">
                <p><font-awesome-icon icon="fa-solid fa-check" />{{ feature }}</p>
              </dd>
            </dl>
          </dd>
          <dt>사용 기술 및 언어</dt>
          <dd>
            <dl>
              <dt>
                Frontend
              </dt>
              <dd>
                <span v-for="stack in frontendStacks" :key="stack" class="label">
                  {{ stack }}     
                </span>
              </dd>
            </dl>
            <dl>
              <dt>
                Tools
              </dt>
              <dd>
                <span v-for="tool in toolsStacks" :key="tool" class="label">
                  {{ tool }}
                </span>
              </dd>
            </dl>
          </dd>
        </dl>
        <div class="btn__site">
          <a :href="modalData.github" target="_blank" >
            <font-awesome-icon icon="fa-brands fa-github" />
            <span>깃허브 보러가기</span>
          </a>
          <a :href="modalData.url" target="_blank">
            <font-awesome-icon icon="fa-solid fa-check-to-slot" />
            <span>사이트 보러가기</span>
          </a>
        </div>
        <div class="img__wrap">
          <img :src="modalData.detailimg" :alt="modalData.name">
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