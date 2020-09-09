import { createProject, createTodo } from './controller';

const addBtn = (text) => {
  const addBtn = document.createElement('div');

  addBtn.classList.add('btn', 'w-100', 'add-btn');
  addBtn.innerHTML = text;

  return addBtn;
};

const addProject = () => {
  const addProject = addBtn('Add Project');

  createProject(addProject);

  return addProject;
};

const addTodo = () => {
  const addTodo = addBtn('Add Todo');

  createTodo(addTodo);

  return addTodo;
};

const cancel = () => {
  const cancelBtn = document.createElement('div');

  cancelBtn.classList.add('btn', 'w-100', 'cancel-btn');
  cancelBtn.innerHTML = 'Cancel';

  cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const formCont = document.getElementById('project-form-cont');

    formCont.classList.add('d-none');
  });

  return cancelBtn;
};

const formCont = () => {
  const projectFormCont = document.createElement('div');

  projectFormCont.classList.add('form-container', 'd-none', 'd-flex', 'justify-center', 'align-center', 'w-100', 'pos-abs');
  projectFormCont.setAttribute('id', 'project-form-cont');

  return projectFormCont;
};

const projectForm = () => {
  const projectFormCont = document.getElementById('project-form-cont');
  const projectForm = document.createElement('form');
  const title = document.createElement('label');
  const input = document.createElement('input');
  const addBtn = addProject();
  const cancelBtn = cancel();

  projectForm.classList.add('form', 'd-flex', 'w-50', 'border-R5');
  title.classList.add('label', 'w-100');
  input.classList.add('input', 'w-50');
  projectForm.setAttribute('id', 'project-form');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'project-title');
  title.innerHTML = 'Project Name:';

  projectForm.append(title, input, addBtn, cancelBtn);
  projectFormCont.innerHTML = '';
  projectFormCont.appendChild(projectForm);

  return projectFormCont;
};

const todoForm = () => {
  const projectFormCont = document.getElementById('project-form-cont');
  const projectForm = document.createElement('form');
  const title = document.createElement('label');
  const inputTitle = document.createElement('input');
  const dueDate = document.createElement('label');
  const inputDueDate = document.createElement('input');
  const priority = document.createElement('label');
  const inputPriority = document.createElement('input');
  const description = document.createElement('label');
  const inputDesc = document.createElement('input');
  const note = document.createElement('label');
  const inputNote = document.createElement('input');
  const addBtn = addTodo();
  const cancelBtn = cancel();
  const labels = [title, dueDate, priority, description, note];
  const inputs = [inputTitle, inputDueDate, inputPriority, inputDesc, inputNote];

  projectForm.classList.add('form', 'd-flex', 'w-50', 'border-R5');
  labels.forEach((label) => {
    label.classList.add('label', 'w-100');
  });
  inputs.forEach((input) => {
    input.classList.add('input', 'w-50');
  });

  projectForm.setAttribute('id', 'project-form');
  inputs.forEach((input) => {
    input.setAttribute('type', 'text');
  });
  inputDueDate.setAttribute('type', 'date');
  inputTitle.setAttribute('id', 'todo-title');
  inputDueDate.setAttribute('id', 'todo-dueDate');
  inputPriority.setAttribute('id', 'todo-priority');
  inputDesc.setAttribute('id', 'todo-desc');
  inputNote.setAttribute('id', 'todo-note');
  title.innerHTML = 'TODO Name:';
  dueDate.innerHTML = 'Due Date:';
  priority.innerHTML = 'Priority:';
  description.innerHTML = 'Description:';
  note.innerHTML = 'Note:';

  projectForm.append(title, inputTitle, dueDate, inputDueDate, priority, inputPriority);
  projectForm.append(note, inputNote, description, inputDesc, addBtn, cancelBtn);
  projectFormCont.innerHTML = '';
  projectFormCont.appendChild(projectForm);

  return projectFormCont;
};

export { formCont, projectForm, todoForm };
