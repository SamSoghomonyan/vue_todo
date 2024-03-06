<template>
  <div class="todo-container">
    <input v-model="newTodo" placeholder="Add a new todo" class="todo-input" />
    <button @click="addTodo" class="add-button">Add Todo</button>
    <h2>Todos</h2>
    <ul class="todo-list">
      <li v-for="(todo, index) in todos" :key="index" class="todo-item">
        <div class="todo-text-wrapper">
          <div class="todo-text">{{ todo }}</div>
        </div>
        <div class="button-container">
          <button @click="editTodo(index)" class="edit-button">Edit</button>
          <button @click="deleteTodo(index)" class="delete-button">
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
    };
  },
  computed: {
    todos() {
      return this.$store.getters.allTodos;
    },
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== "") {
        this.$store.dispatch("addTodo", this.newTodo);
        this.newTodo = "";
      }
    },
    editTodo(index) {
      const newTodo = prompt("Enter new todo", this.todos[index]);
      if (newTodo !== null) {
        this.$store.dispatch("editTodo", { index, newTodo });
      }
    },
    deleteTodo(index) {
      if (confirm("Are you sure you want to delete this todo?")) {
        this.$store.dispatch("deleteTodo", index);
      }
    },
  },
};
</script>

<style scoped>
.todo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.todo-input {
  margin-bottom: 10px;
  height: 30px;
  width: 270px;
  border-radius: 8px;
  border: none;
  color: #46ad46;
}

.add-button {
  margin-bottom: 10px;
  height: 36px;
  width: 146px;
  background: white;
  color: #46ad46;
  font-size: 17px;
  boder-radius: 8px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}
.add-button:hover {
  background-color: #46ad46;
  color: white;
}

.todo-list {
  list-style-type: none;
  padding: 0;
  max-height: 300px; 
  overflow-y: auto; 
}

.todo-item {
  background-color: #f8f8f8;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between; 
  align-items: center;
  width: 400px;
}

.todo-text-wrapper {
  overflow-x: auto; 
  white-space: nowrap; 
}

.todo-text {
  margin-right: 10px; 
}

.button-container {
  flex-shrink: 0; 
}

.edit-button,
.delete-button {
  margin-left: 4px;
  background-color: #46ad46;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
}

.edit-button:hover,
.delete-button:hover {
  background-color: white;
  color: #46ad46;
  border: 1px solid #46ad46;
}
</style>
