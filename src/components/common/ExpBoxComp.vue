<template>
  <div class="exp__box">
    <ul>
      <li class="date">{{ date }}</li>
      <li class="company">{{ company }}</li>
      <li>{{ team }}</li>
      <li class="txt">
        <ul>
          <li>{{ txt1 }}</li>
          <li>{{ txt2 }}</li>
        </ul>
      </li>
    </ul>
  </div>
  </template>

<script>
export default {
  props: {
    date: {
      type: String,
    },
    company: {
      type: String,
    },
    team: {
      type: String,
    },
    txt1: {
      type: String,
    },
    txt2: {
      type: String,
    }
  }
}
</script>

<style lang="scss" scoped>
  @use '@/styles/sections/experience' as *;
</style>