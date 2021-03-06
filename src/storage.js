// eslint-disable-next-line import/no-cycle
import { todoList, projectRender } from './user-interface';

const LocalStorageModule = (() => {
  const saveProject = (key, project) => {
    localStorage.setItem(key, JSON.stringify(Array.from(project.entries())));
    projectRender();
  };

  const deleteProject = (key) => {
    localStorage.removeItem(key);
  };

  const getProject = (key) => new Map(JSON.parse(localStorage.getItem(key)));

  const getAllProjects = () => {
    const arrKeys = Object.keys(localStorage);
    const projects = [];

    arrKeys.forEach((key) => {
      projects.push(new Map(JSON.parse(localStorage.getItem(key))));
    });

    return projects;
  };

  const saveTodo = (todo, key) => {
    const project = new Map(JSON.parse(localStorage.getItem(key)));
    const todos = new Map(project.get('todos'));

    todos.set(todo.id, todo);
    project.set('todos', Array.from(todos));
    localStorage.setItem(key, JSON.stringify(Array.from(project.entries())));
    todoList(key);
  };

  const deleteTodo = (todoKey, projectKey) => {
    const project = new Map(JSON.parse(localStorage.getItem(projectKey)));
    const todos = new Map(project.get('todos'));

    todos.delete(todoKey);
    project.set('todos', Array.from(todos));
    localStorage.setItem(projectKey, JSON.stringify(Array.from(project.entries())));
    todoList(projectKey);
  };

  return {
    saveProject,
    deleteProject,
    getProject,
    getAllProjects,
    saveTodo,
    deleteTodo,
  };
})();

export default LocalStorageModule;
