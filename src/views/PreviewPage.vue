<template>
  <div>
    <h2>Превью:</h2>
    <p>ФИО: {{ fullName }}</p>
    <p>Возраст: {{ age }}</p>
    <h2>Дети:</h2>
    <div v-for="(child, index) in children" :key="index">
      <p>{{ index + 1 }}. Имя: {{ child.name }}, Возраст: {{ child.age }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    fullName() {
      return this.$store.state.fullName;
    },
    age() {
      return this.$store.state.age;
    },
    children() {
      return this.$store.state.children;
    }
  }
};
</script>
