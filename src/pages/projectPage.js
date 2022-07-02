//loads a page for a specific project

function loadProjectPage(project) {
    let projectSection = document.querySelector('.current-project');

    let pageTitle = document.createElement('h1');
    pageTitle.innerHTML = project.name;
    projectSection.appendChild(pageTitle);


}

export { loadProjectPage };