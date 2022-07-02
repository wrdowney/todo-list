//builds default home page of website
import Project from './data/project.js';
import {loadHome} from './pages/home.js';
let projects = [];

function initializeWebsite() {
    loadHome();
}

function createProject(name) {
    projects.append(new Project(name));
}

function getProjects() {
    return projects;
}

export {initializeWebsite, createProject};