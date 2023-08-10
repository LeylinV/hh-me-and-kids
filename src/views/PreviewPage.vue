<template>
    <div>
        <TitiledBlockUI title="Персональные данные">
            <p>{{ formattedPersonal }} </p>
        </TitiledBlockUI>
        <TitiledBlockUI title="Дети">
            <div class="child" v-for="(child, index) in formattedChildren" :key="index">
                <p class="child-text">{{child}}</p>
            </div>
        </TitiledBlockUI>
    </div>
</template>

<script>
import TitiledBlockUI from "@/components/ui/TitledBlockUI/TitiledBlockUI";
import {mapGetters} from 'vuex'
export default {
    components: {TitiledBlockUI},
    computed: {
        ...mapGetters({
            formattedChildren: "formattedChildren",
            formattedPersonal: 'formattedPersonal'
        })
    }
};
</script>
<style>
.child{
    text-align: start;
}
.child-text{
    display: inline-block;
    background: #F1F1F1;
    border-radius: 5px;
    margin-bottom: 20px;
    padding: 15px 25px;
}
p{
    text-align: start;
    font-weight: 700;
    font-size: 22px;
}
</style>
