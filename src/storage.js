const LocalStorageModule = (() => {
  const saveProject = (key, project) => {
    localStorage.setItem(key, JSON.stringify(Array.from(project.entries())));
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

    todos.set(todo.title, todo);
    project.set('todos', Array.from(todos));
    localStorage.setItem(key, JSON.stringify(Array.from(project.entries())));
  };

  const deleteTodo = (todo, key) => {
    const project = new Map(JSON.parse(localStorage.getItem(key)));
    const todos = new Map(project.get('todos'));

    todos.delete(todo.title);
    project.set('todos', Array.from(todos));
    localStorage.setItem(key, JSON.stringify(Array.from(project.entries())));
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
