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

export { createProject };