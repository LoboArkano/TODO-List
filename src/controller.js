/* eslint-disable import/no-cycle */
import LocalStorageModule from './storage';

const crypto = require('crypto');

const createProject = (btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const formCont = document.getElementById('project-form-cont');
    const title = document.getElementById('project-title');
    const newProject = new Map();
    const todos = [];
    let msg = '';

    if (title.value.trim() === '') {
      msg += 'Set a title';
    }

    if (msg.length === 0) {
      newProject.set('title', title.value);
      newProject.set('todos', todos);

      LocalStorageModule.saveProject(title.value, newProject);
      formCont.classList.add('d-none');
    } else {
      alert(msg);
    }
  });
};

const createTodo = (btn, projectID, todoID) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();

    const formCont = document.getElementById('project-form-cont');
    const title = document.getElementById('todo-title');
    const dueDate = document.getElementById('todo-dueDate');
    const priority = document.getElementById('todo-priority');
    const description = document.getElementById('todo-desc');
    const note = document.getElementById('todo-note');
    const newTodo = {};
    let msg = '';

    if (title.value.trim() === '') {
      msg += 'Set a title. ';
    }
    if (dueDate.value.trim() === '') {
      msg += 'Set a due date. ';
    }
    if (priority.value.trim() === '') {
      msg += 'Set a priority. ';
    }
    if (description.value.trim() === '') {
      msg += 'Set a description. ';
    }
    if (note.value.trim() === '') {
      msg += 'Set a note.';
    }

    if (msg.length === 0) {
      if (todoID === null) {
        const secret = title.value;
        const hash = crypto.createHmac('sha256', secret)
          .update('Shadows of Mordor')
          .digest('hex');

        newTodo.id = hash;
      } else {
        newTodo.id = todoID;
      }

      newTodo.title = title.value;
      newTodo.dueDate = dueDate.value;
      newTodo.priority = priority.value;
      newTodo.description = description.value;
      newTodo.note = note.value;

      LocalStorageModule.saveTodo(newTodo, projectID);
      formCont.classList.add('d-none');
    } else {
      alert(msg);
    }
  });
};

const deleteTodo = (todoKey, projectKey) => {
  LocalStorageModule.deleteTodo(todoKey, projectKey);
};

const getProjectsTitle = () => {
  const projects = LocalStorageModule.getAllProjects();

  return projects;
};

const getProject = (key) => {
  const project = LocalStorageModule.getProject(key);

  return project;
};

export {
  createProject,
  createTodo,
  deleteTodo,
  getProjectsTitle,
  getProject,
};