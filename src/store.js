import { createStore } from "vuex";
const updateLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export default createStore({
  state: {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
      updateLocalStorage(state.todos);
    },
    editTodo(state, { index, newTodo }) {
      state.todos[index] = newTodo;
      updateLocalStorage(state.todos);
    },
    deleteTodo(state, index) {
      state.todos.splice(index, 1);
      updateLocalStorage(state.todos);
    },
  },
  actions: {
    addTodo({ commit }, todo) {
      commit("addTodo", todo);
    },
    editTodo({ commit }, payload) {
      commit("editTodo", payload);
    },
    deleteTodo({ commit }, index) {
      commit("deleteTodo", index);
    },
  },
  getters: {
    allTodos: (state) => state.todos,
  },
});
