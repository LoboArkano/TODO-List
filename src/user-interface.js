const projectsArray = ['project 1', 'project2', 'project 3'];

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
  projectsArray.map(project => projects.appendChild(projectItem(project)));

  return projects;
};

const userInterface = () => {
  const userInterface = document.createElement('main');

  userInterface.classList.add('main-container', 'w-100', 'd-flex', 'wrap');
  userInterface.appendChild(projectInterface());

  return userInterface;
};

export default userInterface;
