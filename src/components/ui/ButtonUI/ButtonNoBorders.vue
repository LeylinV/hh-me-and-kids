<template>
  <button>
    <span class="add" v-if="isAdd">+</span>
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    isAdd: Boolean,
  },
  methods: {
    handleClick() {
      this.$emit('click');
    }
  }
}
</script>

<style scoped>
.add{
  color: #01A7FD;
  font-size: 30px;
  font-weight: 600;
  padding-right: 10px;
}
button {
  display: flex;
  align-items: center;
  justify-content: center;
  font: inherit;
  background-color: transparent;
  cursor: pointer;
  color: #01A7FD;
  padding: 7px 14px;
  font-size: 18px;
}
</style>