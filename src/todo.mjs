// eslint-disable-next-line import/extensions
import * as tm from './todo-modules.mjs';

const todo = (title, description, dueDate, priority, notes) => {
  const state = {
    title,
    description,
    dueDate,
    priority,
    notes,
  };

  return {
    ...tm.todoGetters(state),
    ...tm.todoSetters(state),
  };
};
