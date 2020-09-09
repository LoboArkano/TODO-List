import { projectForm, todoForm } from './form';

const projectsArray = ['project 1', 'project2', 'project 3'];
const todosArray = ['todo 1', 'todo 2', 'todo 3'];

const addProject = () => {
  const addBtn = document.createElement('div');

  addBtn.classList.add('project', 'border-R5');
  addBtn.innerHTML = 'ADD PROJECT';
  addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const formCont = document.getElementById('project-form-cont');

    projectForm();
    formCont.classList.remove('d-none');
  });

  return addBtn;
};

const addTodo = () => {
  const addBtn = document.createElement('div');

  addBtn.classList.add('todo', 'd-flex', 'border-R5');
  addBtn.innerHTML = 'ADD TODO';
  addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const formCont = document.getElementById('project-form-cont');

    todoForm();
    formCont.classList.remove('d-none');
  });

  return addBtn;
};

const projectItem = (project) => {
  const projectItem = document.createElement('div');
  const projectTitle = document.createElement('p');

  projectItem.classList.add('project', 'border-R5');
  projectTitle.classList.add('title');
  projectTitle.innerHTML = `${project}`;
  projectItem.appendChild(projectTitle);

  return projectItem;
};

const projectInterface = () => {
  const projects = document.createElement('div');

  projects.classList.add('projects');
  projects.appendChild(addProject());
  projectsArray.map(project => projects.appendChild(projectItem(project)));

  return projects;
};

const todoInfo = () => {
  const todoInfo = document.createElement('div');
  const title = document.createElement('p');
  const status = document.createElement('div');
  const dueDate = document.createElement('p');
  const priority = document.createElement('p');

  todoInfo.classList.add('info', 'd-flex', 'justify-between');
  title.classList.add('title');
  status.classList.add('status');
  dueDate.classList.add('dueDate');
  priority.classList.add('priority');
  title.innerHTML = 'Jump';
  dueDate.innerHTML = '12/05/2020';
  priority.innerHTML = 'Low';

  status.append(dueDate, priority);
  todoInfo.append(title, status);

  return todoInfo;
};

const todoDetails = () => {
  const details = document.createElement('details');
  const summary = document.createElement('summary');
  const description = document.createElement('p');
  const descText = document.createElement('p');
  const note = document.createElement('p');
  const noteText = document.createElement('p');

  summary.classList.add('summary', 'border-R5');
  description.classList.add('description');
  descText.classList.add('desc-text', 'border-R5');
  note.classList.add('note');
  noteText.classList.add('note-text', 'border-R5');
  summary.innerHTML = 'Click here for more details';
  description.innerHTML = 'Description:';
  descText.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
  note.innerHTML = 'Notes:';
  noteText.innerHTML = 'Donec consequat tellus urna, vestibulum varius est maximus sit amet.';


  details.append(summary, description, descText, note, noteText);

  return details;
};

const todoItem = () => {
  const todoItem = document.createElement('div');

  todoItem.classList.add('todo', 'd-flex', 'border-R5');
  todoItem.appendChild(todoInfo());
  todoItem.appendChild(todoDetails());

  return todoItem;
};

const todoInterface = () => {
  const todos = document.createElement('div');

  todos.classList.add('todos');
  todos.appendChild(addTodo());
  todosArray.map(todo => todos.appendChild(todoItem(todo)));

  return todos;
};

const userInterface = () => {
  const userInterface = document.createElement('main');

  userInterface.classList.add('main-container', 'w-100', 'd-flex', 'wrap');
  userInterface.appendChild(projectInterface());
  userInterface.appendChild(todoInterface());

  return userInterface;
};

export default userInterface;
