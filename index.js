import Vue from 'vue';
import Incrementer from './src/Components/incrementer/incrementer.vue';
import TodoItem from './src/Components/todoItem/todoItem.vue';

new Vue({
    el: '#app',
    components: {
        Incrementer,
        TodoItem
    }
});