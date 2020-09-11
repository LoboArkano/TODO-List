import { projectForm, todoForm } from './form';
import { getProjectsTitle, getProject, deleteTodo } from './controller';
import deleteIcon from './assets/images/trash.png';
import editIcon from './assets/images/edit.svg';

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

const addTodo = (id) => {
  const addBtn = document.createElement('div');

  addBtn.classList.add('todo', 'd-flex', 'border-R5');
  addBtn.innerHTML = 'ADD TODO';
  addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const formCont = document.getElementById('project-form-cont');

    todoForm(id);
    formCont.classList.remove('d-none');
  });

  return addBtn;
};

const todoInfo = (todo) => {
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
  title.innerHTML = `${todo.title}`;
  dueDate.innerHTML = `${todo.dueDate}`;
  priority.innerHTML = `${todo.priority}`;

  status.append(dueDate, priority);
  todoInfo.append(title, status);

  return todoInfo;
};

const todoDetails = (todo) => {
  const details = document.createElement('details');
  const summary = document.createElement('summary');
  const description = document.createElement('p');
  const descText = document.createElement('p');
  const note = document.createElement('p');
  const noteText = document.createElement('p');

  summary.classList.add('summary');
  description.classList.add('description');
  descText.classList.add('desc-text', 'border-R5');
  note.classList.add('note');
  noteText.classList.add('note-text', 'border-R5');
  summary.innerHTML = 'Click here for more details';
  description.innerHTML = 'Description:';
  descText.innerHTML = `${todo.description}`;
  note.innerHTML = 'Notes:';
  noteText.innerHTML = `${todo.note}`;


  details.append(summary, description, descText, note, noteText);

  return details;
};

const deleteBtn = (id, name) => {
  const myDelete = new Image();
  myDelete.src = deleteIcon;

  myDelete.classList.add('icon');
  myDelete.addEventListener('click', (e) => {
    e.preventDefault();

    deleteTodo(id, name);
  });

  return myDelete;
};

const todoOptions = (id, name) => {
  const options = document.createElement('div');
  const deleteTodo = deleteBtn(id, name);

  options.classList.add('options', 'd-flex');

  deleteBtn();

  options.append(deleteTodo);

  return options;
};

const todoItem = (todo, name) => {
  const todoItem = document.createElement('div');

  todoItem.classList.add('todo', 'd-flex', 'border-R5');
  todoItem.setAttribute('id', `${todo.title}`);
  todoItem.setAttribute('name', `${name}`);
  todoItem.appendChild(todoInfo(todo));
  todoItem.appendChild(todoDetails(todo));
  todoItem.appendChild(todoOptions(todo.title, name));

  return todoItem;
};

const todoList = (id) => {
  const todosCont = document.getElementById('todo-cont');
  const project = getProject(id);
  const todos = new Map(project.get('todos'));

  todosCont.innerHTML = '';

  todosCont.appendChild(addTodo(id));
  todos.forEach((todo) => {
    todosCont.appendChild(todoItem(todo, id));
  });
};

const todoCont = () => {
  const todos = document.createElement('div');

  todos.classList.add('todos');
  todos.setAttribute('id', 'todo-cont');

  return todos;
};

const projectItem = (project) => {
  const projectItem = document.createElement('div');
  const projectTitle = document.createElement('p');

  projectItem.classList.add('project', 'border-R5');
  projectTitle.classList.add('title');
  projectItem.setAttribute('id', project.get('title'));
  projectTitle.innerHTML = `${project.get('title')}`;
  projectItem.appendChild(projectTitle);

  projectItem.addEventListener('click', (e) => {
    e.preventDefault();

    todoList(projectItem.id);
  });

  return projectItem;
};

const projectInterface = () => {
  const projects = document.createElement('div');
  const projectsArr = getProjectsTitle();

  projects.classList.add('projects');
  projects.appendChild(addProject());
  projectsArr.map(project => projects.appendChild(projectItem(project)));

  return projects;
};

const userInterface = () => {
  const userInterface = document.createElement('main');

  userInterface.classList.add('main-container', 'w-100', 'd-flex', 'wrap');
  userInterface.appendChild(projectInterface());
  userInterface.appendChild(todoCont());

  return userInterface;
};

export default userInterface;
