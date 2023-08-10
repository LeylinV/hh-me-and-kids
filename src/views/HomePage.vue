<template>
  <TitiledBlockUI title="Персональные данные">
    <InputUI label="Имя" placeholder="ФИО" value="fullName" v-model="fullName" />
    <InputUI type="number" label="Возраст" placeholder="Введите возраст" value="age" v-model="age" />
  </TitiledBlockUI>

  <TitiledBlockUI title="Дети (макс.5)">
    <template #header>
      <ButtonUI :is-add="true" @click="addChild" v-if="children.length < 5">Добавить ребенка</ButtonUI>
    </template>
    <div v-for="(child, index) in children" :key="index">
      <ButtonNoBorders @click="removeChild(index)">Удалить</ButtonNoBorders>
      <label>Имя ребенка: <input v-model="child.name" /></label>
      <label>Возраст ребенка: <input v-model.number="child.age" type="number" /></label>
    </div>
  </TitiledBlockUI>

  <ButtonFilledUI @click="saveData">Сохранить</ButtonFilledUI>
</template>

<script>
import ButtonUI from "@/components/ui/ButtonUI/ButtonUI.vue";
import ButtonFilledUI from "@/components/ui/ButtonUI/ButtonFilledUI.vue";
import ButtonNoBorders from "@/components/ui/ButtonUI/ButtonNoBorders.vue";
import InputUI from "@/components/ui/InputUI/InputUI.vue";
import TitiledBlockUI from "@/components/ui/TitledBlockUI/TitiledBlockUI.vue";

export default {
  components: {TitiledBlockUI, InputUI, ButtonNoBorders, ButtonFilledUI, ButtonUI},
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
  }
};
</script>
