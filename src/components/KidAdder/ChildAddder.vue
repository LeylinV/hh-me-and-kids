<template>
    <div class="kid">
        <div class="kid-45">
            <InputUI label="Имя" placeholder="ФИО" v-model="localName"/>
        </div>
        <div class="kid-45">
            <InputUI type="number" label="Возраст" placeholder="Введите возраст" v-model="localAge"/>
        </div>
        <div class="kid-10">
            <ButtonNoBorders @click="removeChild(this.child.id)">Удалить</ButtonNoBorders>
        </div>
    </div>
</template>

<script>
import InputUI from "@/components/ui/InputUI/InputUI";
import ButtonNoBorders from "@/components/ui/ButtonUI/ButtonNoBorders";
export default {
    components: {ButtonNoBorders, InputUI},
    props:{
        child: {
            type: Object,
            required: true
        }
    },
    data() {
        return{
            localName: this.child.name,
            localAge: this.child.age
        }
    },
    watch: {
        localName(newName) {
            this.updateChildData({ name: newName });
        },
        localAge(newAge) {
            this.updateChildData({ age: newAge });
        }
    },
    methods: {
        updateChildData(updatedData) {
            this.$emit('update:child', { ...this.child, ...updatedData });
        },
        removeChild(id){
            this.$emit('delete:child', id)
        }
    }
}
</script>

<style scoped>
.kid{
    width: 100%;
    display: flex;
}
.kid-45{
    width: 45%;
    padding-right: 25px;
}
.kid-10{
    width: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>