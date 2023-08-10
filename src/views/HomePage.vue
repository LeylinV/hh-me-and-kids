<template>
    <TitiledBlockUI title="Персональные данные">
        <InputUI label="Имя" placeholder="ФИО" v-model="fullName"/>
        <InputUI type="number" label="Возраст" placeholder="Введите возраст"  v-model="age"/>
    </TitiledBlockUI>

    <TitiledBlockUI title="Дети (макс.5)">
        <template #header>
            <ButtonUI :is-add="true" @click="addChild" v-if="children.length < 5">Добавить ребенка</ButtonUI>
        </template>
        <ChildAddder
            v-for="(child, index) in children"
            :key="index"
            :child="child"
            @delete:child="deleteChild"
            @update:child="updateChild"
        />
    </TitiledBlockUI>

    <ButtonFilledUI @click="saveData">Сохранить</ButtonFilledUI>
</template>

<script>
import ButtonUI from "@/components/ui/ButtonUI/ButtonUI.vue";
import ButtonFilledUI from "@/components/ui/ButtonUI/ButtonFilledUI.vue";
import InputUI from "@/components/ui/InputUI/InputUI.vue";
import TitiledBlockUI from "@/components/ui/TitledBlockUI/TitiledBlockUI.vue";
import ChildAddder from "@/components/KidAdder/ChildAddder";

export default {
    components: {ChildAddder, TitiledBlockUI, InputUI, ButtonFilledUI, ButtonUI},
    data() {
        return {
            fullName: this.$store.state.fullName,
            age: this.$store.state.age,
            children: this.$store.state.children
        };
    },
    methods: {
        addChild() {
            this.children.push({name: '', age: null, id: Date.now()})
        },
        updateChild(childUpd) {
            this.children[this.children.findIndex(child => child.id === childUpd.id)] = childUpd
        },
        deleteChild(id){
            this.children = this.children.filter(child => child.id !== id)
        },
        saveData() {
            this.$store.commit('setFullName', this.fullName);
            this.$store.commit('setAge', this.age);
            this.$store.commit('setChildren', this.children)
        },
    }
};
</script>
