<template>
  <div class="input-container">
    <label class="input-label">{{ label }}</label>
    <input class="input-field" :value="internalValue" @input="updateInternalValue($event.target.value)" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: [String, Number],
    placeholder: String,
  },
  data() {
    return {
      internalValue: this.value,
    };
  },
  methods: {
    updateInternalValue(newValue) {
      this.internalValue = newValue;
      this.$emit('input', newValue);
    },
  },
};
</script>

<style scoped>
.input-container {
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.input-label {
  font-family: 'Montserrat', sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  margin-bottom: 6px;
  color: #9B9B9B;
}

.input-field {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0px;
  text-align: left;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
