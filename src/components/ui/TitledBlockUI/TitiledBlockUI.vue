<template>
  <section>
    <div class="header-section">
      <h2>{{title}}</h2>
      <slot name="header" />
    </div>
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    title: String,
  },
}
</script>

<style scoped>
section{
  width: 100%;
  margin-top: 60px;
}
.header-section{
  display: flex;
  justify-content: space-between;
}
.header-section h2{
  font-weight: 500;
  font-size: 22px;
}

</style>