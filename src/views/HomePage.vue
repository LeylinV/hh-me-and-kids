<template>
  <div>
    <h2>Введите информацию о себе:</h2>
    <InputUI :label="'Имя'" :placeholder="'ФИО'" @input="updateName" />
    <label>Возраст: <input v-model.number="age" type="number" /></label>

    <h2>Дети:</h2>
    <div v-for="(child, index) in children" :key="index">
      <ButtonNoBorders @click="removeChild(index)">Удалить</ButtonNoBorders>
      <label>Имя ребенка: <input v-model="child.name" /></label>
      <label>Возраст ребенка: <input v-model.number="child.age" type="number" /></label>
    </div>

    <ButtonUI :is-add="true" @click="addChild" v-if="children.length < 5">Добавить ребенка</ButtonUI>
    <ButtonFilledUI @click="saveData">Сохранить</ButtonFilledUI>
  </div>
</template>

<script>
import ButtonUI from "@/components/ui/ButtonUI/ButtonUI.vue";
import ButtonFilledUI from "@/components/ui/ButtonUI/ButtonFilledUI.vue";
import ButtonNoBorders from "@/components/ui/ButtonUI/ButtonNoBorders.vue";
import InputUI from "@/components/ui/InputUI/InputUI.vue";

export default {
  components: {InputUI, ButtonNoBorders, ButtonFilledUI, ButtonUI},
  data() {
    return {
      fullName: '',
      age: null,
      children: []
    };
  },
  methods: {
    addChild() {
      this.$store.dispatch('addNewChild');
    },
    saveData() {
      this.$store.commit('setFullName', this.fullName);
      this.$store.commit('setAge', this.age);
    },
    updateName(newName) {
      this.fullName = newName;
    },
  }
};
</script>
