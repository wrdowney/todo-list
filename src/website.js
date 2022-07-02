//builds default home page of website
import {loadHome} from './pages/home.js';

function initializeWebsite() {
    loadHome();
}

function createProject(name) {
    alert('testing');
}

export {initializeWebsite, createProject};