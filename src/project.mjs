// eslint-disable-next-line import/extensions
import * as pm from './project-modules.mjs';

const project = (title) => {
  const state = {
    title,
    todos: {},
  };

  return {
    ...pm.projectGetters(state),
    ...pm.projectSetters(state),
    ...pm.todosManager(state),
  };
};
