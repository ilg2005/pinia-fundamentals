<template>
<div>
  <form @submit.prevent="addTodo(todo)">
    <input type="text" v-model="todo"><button type="submit">Add</button>
  </form>
</div>
</template>

<script setup>
import { ref } from "vue";
import { useTodoListStore } from "@/stores/todoList";

const todoListStore = useTodoListStore();
const todo = ref();
const addTodo = text => {
  if (text.length === 0) {
    return;
  }
  todoListStore.addTodo(text);
  todo.value = '';
}
</script>

<style scoped>

</style>
