const projectGetters = (state) => ({
  getTitle() {
    return state.title;
  },
  getTodos() {
    return state.todos;
  },
});

const projectSetters = (state) => ({
  setTitle(title) {
    state.title = title;
  },
});

const todosManager = (state) => ({
  addTodo(key, todo) {
    state.todos.set(key, todo);
  },
});

export { projectGetters, projectSetters, todosManager };