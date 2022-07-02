//builds default home page of website
import Project from './data/project.js';
import {loadHome} from './pages/home.js';
let projects = [];

function initializeWebsite() {
    loadHome();
}

function createProject(name) {
    projects.push(new Project(name));
}

function updateProjectsSidebar() {
    let projectsList = document.querySelector(".projects-list");
    projectsList.innerHTML = '';
    let project = document.createElement("div");
    for(let i = 0; i < projects.length; i++) {
        project = document.createElement("div");
        project.classList.add("sidebar-container");
        let projectImg = document.createElement("img");
        projectImg.src = "/images/project.svg";
        let projectText = document.createElement("p");
        projectText.innerHTML = projects[i].name;
        project.appendChild(projectImg);
        project.appendChild(projectText);
        projectsList.appendChild(project);
    }
}

export {initializeWebsite, createProject, updateProjectsSidebar};