<template>
  <div class="modal__popup">
    <div class="modal__content bg__proj">
      <h3>{{ this.modalData.name }}</h3>
      <button @click="changeModalState" class="btn__close">
        <span class="pi pi-times"></span>
      </button>
      <div class="detail_view">
        <dl>
          <dt>소개</dt>
          <dd>{{ this.modalData.descintro}}</dd>
          <dt>상세내용</dt>
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
          <!-- <dt>첨부파일</dt>
          <dd>{{ this.modalData.file }}</dd> -->
        </dl>
      </div>
      <div class="btn__site">
        <a :href="modalData.github" target="_blank" >
          <font-awesome-icon icon="fa-brands fa-github" />
          <span>깃허브</span>
        </a>
        <a :href="modalData.url" target="_blank">
          <font-awesome-icon icon="fa-solid fa-check-to-slot" />
          <span>사이트</span>
        </a>
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