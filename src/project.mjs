// eslint-disable-next-line import/extensions
import * as pm from './project-modules.mjs';

const project = (title) => {
  const state = {
    title,
    todos: new Map(),
  };

  return {
    ...pm.projectGetters(state),
    ...pm.projectSetters(state),
    ...pm.todosManager(state),
  };
};

export default project;
