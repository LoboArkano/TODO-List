const formCont = () => {
  const projectFormCont = document.createElement('div');

  projectFormCont.classList.add('form-container', 'd-none', 'd-flex', 'justify-center', 'align-center', 'w-100', 'pos-abs');
  projectFormCont.setAttribute('id', 'project-form-cont');

  return projectFormCont;
};

const projectForm = () => {
  const projectFormCont = formCont();
  const projectForm = document.createElement('form');
  const title = document.createElement('label');
  const input = document.createElement('input');
  const addBtn = document.createElement('div');
  const cancelBtn = document.createElement('div');

  projectForm.classList.add('form', 'd-flex', 'w-50', 'border-R5');
  title.classList.add('label', 'w-100');
  input.classList.add('input', 'w-50');
  addBtn.classList.add('btn', 'w-100', 'add-btn');
  cancelBtn.classList.add('btn', 'w-100', 'cancel-btn');
  projectForm.setAttribute('id', 'project-form');
  input.setAttribute('type', 'text');
  input.setAttribute('id', 'project-title');
  title.innerHTML = 'Project Name:';
  addBtn.innerHTML = 'Add Project';
  cancelBtn.innerHTML = 'Cancel';

  projectForm.append(title, input, addBtn, cancelBtn);
  projectFormCont.innerHTML = '';
  projectFormCont.appendChild(projectForm);

  return projectFormCont;
};

const todoForm = () => {
  const projectFormCont = formCont();
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
  const addBtn = document.createElement('div');
  const cancelBtn = document.createElement('div');
  const labels = [title, dueDate, priority, description, note];
  const inputs = [inputTitle, inputDueDate, inputPriority, inputDesc, inputNote];

  projectForm.classList.add('form', 'd-flex', 'w-50', 'border-R5');
  labels.forEach((label) => {
    label.classList.add('label', 'w-100');
  });
  inputs.forEach((input) => {
    input.classList.add('input', 'w-50');
  });
  addBtn.classList.add('btn', 'w-100', 'add-btn');
  cancelBtn.classList.add('btn', 'w-100', 'cancel-btn');

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
  addBtn.innerHTML = 'Add Project';
  cancelBtn.innerHTML = 'Cancel';

  projectForm.append(title, inputTitle, dueDate, inputDueDate, priority, inputPriority);
  projectForm.append(note, inputNote, description, inputDesc, addBtn, cancelBtn);
  projectFormCont.appendChild(projectForm);

  return projectFormCont;
};

export { projectForm, todoForm };
