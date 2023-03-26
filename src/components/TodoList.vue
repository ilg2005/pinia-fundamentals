<template>
  <div>
    <p v-for="todo in todoList"
       :key="todo.id"
       class="item"
    >
      <span :class="{completed: todo.completed}"
      >
      {{ todo.item }}
    </span>
      <span
          class="tick"
          @click="store.toggleCompleted(todo.id)"
      >
      &checkmark;</span>
      <span
          class="cross"
          @click="store.deleteTodo(todo.id)"
      >
      &#10060;</span>
    </p>
  </div>
</template>

<script setup>
import {useTodoListStore} from "@/stores/todoList";
import {storeToRefs} from "pinia";

const store = useTodoListStore();
const {todoList} = storeToRefs(store);
</script>

<style scoped>

.tick, .cross {
  cursor: pointer;
}

.tick:hover, .cross:hover {
  font-weight: bold;
}

.completed {
  text-decoration: line-through;
}
</style>
