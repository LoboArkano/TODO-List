import project from './project';
import todo from './todo';
import LocalStorageModule from './storage';

const createProject = (btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const formCont = document.getElementById('project-form-cont');
    const title = document.getElementById('project-title');
    const newProject = new Map();
    const todos = [];

    newProject.set('title', title.value);
    newProject.set('todos', todos);

    LocalStorageModule.saveProject(title.value, newProject);
    formCont.classList.add('d-none');
  });
};

const createTodo = (btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const formCont = document.getElementById('project-form-cont');
    const title = document.getElementById('todo-title');
    const dueDate = document.getElementById('todo-dueDate');
    const priority = document.getElementById('todo-priority');
    const description = document.getElementById('todo-desc');
    const note = document.getElementById('todo-note');
    const newTodo = {};

    newTodo.title = title.value;
    newTodo.dueDate = dueDate.value;
    newTodo.priority = priority.value;
    newTodo.description = description.value;
    newTodo.note = note.value;

    LocalStorageModule.saveTodo(newTodo, 'Project 1');
    formCont.classList.add('d-none');
  });
};

const getProjectsTitle = () => {
  const projects = LocalStorageModule.getAllProjects();

  return projects;
};

export { createProject, createTodo, getProjectsTitle };