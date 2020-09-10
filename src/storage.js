const LocalStorageModule = (() => {
  const saveProject = (key, project) => {
    localStorage.setItem(key, JSON.stringify(Array.from(project.entries())));
  };

  const deleteProject = (key) => {
    localStorage.removeItem(key);
  };

  const getProject = (key) => JSON.parse(localStorage.getItem(key));

  const getAllProjects = () => {
    const arrKeys = Object.keys(localStorage);
    const projects = [];

    arrKeys.forEach((key) => {
      projects.push(localStorage.getItem(key));
    });

    return projects;
  };

  return {
    saveProject,
    deleteProject,
    getProject,
    getAllProjects,
  };
})();

export default LocalStorageModule;
