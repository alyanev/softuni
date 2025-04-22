function createProjects(name, projects) {
    name = String(name);
    projects = Number(projects);
    hours = projects * 3;
    const result = `The architect ${name} will need ${hours} hours to complete ${projects} project/s.`
    return result;
}