<template>
  <div class="title">
    <h2 v-if="title">{{ title }}</h2>
    <h3 v-if="subtitle">{{ subtitle }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    }
  }
}
</script>

<style lang="scss" scoped>
  .exp__wrapper {
    h3 {
      margin: 2rem 0;
      text-align: left;
    }
  }
</style>