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
  border: 3px #01A7FD solid;
  background-color: #01A7FD;
  border-radius: 100px;
  font: inherit;
  cursor: pointer;
  color: #fff;
  padding: 14px 28px;
  font-size: 18px;
}
</style>