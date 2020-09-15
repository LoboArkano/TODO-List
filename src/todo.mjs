// eslint-disable-next-line import/extensions
import * as tm from './todo-modules.mjs';

const todo = (title, dueDate, priority, description, notes) => {
  const state = {
    title,
    dueDate,
    priority,
    description,
    notes,
  };

  return {
    ...tm.todoGetters(state),
    ...tm.todoSetters(state),
  };
};

export default todo;
