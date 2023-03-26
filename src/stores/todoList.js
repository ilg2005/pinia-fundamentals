import {defineStore} from "pinia";

export const useTodoListStore = defineStore('todoList', {
    state: () => ({
        todoList: [],
        id: 0
    }),
    getters: {},
    actions: {
        addTodo(item) {
            this.todoList.push({
                item,
                id: this.id++,
                completed: false
            });
        },
        deleteTodo(itemId) {
            this.todoList = this.todoList.filter(item => item.id !== itemId);
        },
        toggleCompleted(itemId) {
            const todo = this.todoList.find(item => item.id === itemId);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
});
