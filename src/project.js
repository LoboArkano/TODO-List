import { getTitle, getTodos } from './todo-functions';

const project = (title) => {
  let state = {
    title,
    todos: {},
  };

  return Object.asign(
    {},
    getTitle(state),
    getTodos(state),
  );
};
