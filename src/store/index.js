import { createStore } from 'vuex';

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
        addChild(state, child) {
            state.children.push(child);
        },
        removeChild(state, index) {
            state.children.splice(index, 1);
        }
    },
    actions: {
        addNewChild({ commit, state }) {
            if (state.children.length < 5) {
                commit('addChild', { name: '', age: null });
            }
        }
    }
});
