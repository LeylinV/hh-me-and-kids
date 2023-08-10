import {createStore} from 'vuex';
import {getPersonalData} from "@/lib/getPersonalData";

export default createStore({
    state: {
        fullName: '',
        age: null,
        children: []
    },
    mutations: {
        setFullName(state, fullName) {
            state.fullName = fullName;
        },
        setAge(state, age) {
            state.age = age;
        },
        setChildren(state, children) {
            state.children = children.filter(child => child.name !== '');
        },
    },
    getters: {
        formattedChildren: state => {
            return state.children.map(child => getPersonalData(child.name, child.age))
        },
        formattedPersonal: state =>{
            return getPersonalData(state.fullName, state.age)
        }
    }
});
