<template>
  <div class="modal__popup">
    <div class="modal__content">
      <h3>{{ this.modalData.name }}</h3>
      <button @click="closePopup()" class="btn__close">
        <span class="pi pi-times"></span>
      </button>
      <div class="detail_view">
        <dl>
          <dt>소개</dt>
          <dd>{{ this.modalData.descintro}}</dd>
          <dt>주요 기능 및 특징</dt>
          <dd>{{ this.modalData.descfeature }}</dd>
          <dt>사용 기술 및 언어</dt>
          <dd>{{ this.modalData.desctech }}</dd>
          <dt>첨부파일</dt>
          <dd>{{ this.modalData.file }}</dd>
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
  props: {
    modalData: {
      type: Object,
      required: true
    }
  },
  methods : {
    closePopup() {
      this.$emit('close', false);
    }
  }
}
</script>