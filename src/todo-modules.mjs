const todoGetters = (state) => ({
  getTitle() {
    return state.title;
  },
  getDescription() {
    return state.description;
  },
  getDueDate() {
    return state.dueDate;
  },
  getPriority() {
    return state.priority;
  },
  getNotes() {
    return state.notes;
  },
});

const todoSetters = (state) => ({
  setTitle(title) {
    state.title = title;
  },
  setDescription(description) {
    state.description = description;
  },
  setDueDate(dueDate) {
    state.dueDate = dueDate;
  },
  setPriority(priority) {
    state.priority = priority;
  },
  setNotes(notes) {
    state.notes = notes;
  },
});

export { todoGetters, todoSetters };
