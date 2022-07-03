//builds default home page of website
import Project from './data/Project.js';
import {loadHome} from './pages/home.js';
import {loadProjectPage} from './pages/projectPage.js';

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
        project.classList.add("project");
        let projectImg = document.createElement("img");
        projectImg.src = "/images/project.svg";
        let projectText = document.createElement("p");
        projectText.innerHTML = projects[i].name;
        let projectRemove = document.createElement("img");
        projectRemove.src = "/images/close.svg";
        projectRemove.style = "visibility: hidden";
        projectRemove.addEventListener("click", () => {
            projects.splice(i, 1);
            updateProjectsSidebar();
        });

        project.addEventListener("click", () => {
            loadProjectPage(projects[i]);
        });

        project.addEventListener("mouseenter", () => {
            projectRemove.style = "visibility: visible";
        });
        
        project.addEventListener("mouseleave", () => {
            projectRemove.style = "visibility: hidden";
        });

        project.appendChild(projectImg);
        project.appendChild(projectText);
        project.appendChild(projectRemove);
        projectsList.appendChild(project);
    }
}

function updateProjectPage(project) {
    loadProjectPage(project);
}

export {initializeWebsite, createProject, updateProjectsSidebar, updateProjectPage};