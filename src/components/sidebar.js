import { createProject, updateProjectsSidebar } from "../website";

//build sidebar

function buildSidebar() {
    var sidebar = document.createElement('div');
    sidebar.classList.add("sidebar");
    
    let todayContainer = document.createElement('div');
    todayContainer.classList.add("sidebar-container");
    let todayImg = document.createElement('img');
    todayImg.src = '/images/today.svg';
    let todayText = document.createElement('p');
    todayText.innerHTML = 'Today';
    todayContainer.appendChild(todayImg);
    todayContainer.appendChild(todayText);

    let weekContainer = document.createElement('div');
    weekContainer.classList.add("sidebar-container");
    let weekImg = document.createElement('img');
    weekImg.src = '/images/week.svg';
    let weekText = document.createElement('p');
    weekText.innerHTML = 'Week';
    weekContainer.appendChild(weekImg);
    weekContainer.appendChild(weekText);

    let projects = buildProjects();
    // menu drops down on click
    let menu = document.querySelector(".menu-button");
    menu.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });


    sidebar.appendChild(todayContainer);
    sidebar.appendChild(weekContainer);
    sidebar.appendChild(projects);


    return sidebar;
}

function buildProjects() {
    //project conainter
    let projectsContainer = document.createElement('div');
    projectsContainer.innerHTML = "Projects";

    let addProjectPopup = document.createElement("div");
    addProjectPopup.classList.add("add-project-popup");
    let popupInput = document.createElement("input");
    popupInput.classList.add("popup-input");
    popupInput.type = "text";
    let addProjectPopupButtons = document.createElement("div");
    addProjectPopupButtons.classList.add("add-project-popup-buttons");
    addProjectPopup.style = "display: none";

    //add button
    let addButton = document.createElement("button");
    addButton.innerHTML = "Add";
    addButton.addEventListener("click", () => {
        if(popupInput.value != "") {
            createProject(popupInput.value);
            addProjectPopup.style = "display: none";
            addProject.style = "display: flex";
            updateProjectsSidebar();
        }
        else {
            alert("Please enter a project name");
        }
    })

    //cancel button
    let cancelButton = document.createElement("button");
    cancelButton.innerHTML = "Cancel";
    cancelButton.addEventListener("click", () => {
        addProjectPopup.style = "display: none";
        addProject.style = "display: flex";
    })
    addProjectPopupButtons.appendChild(addButton);
    addProjectPopupButtons.appendChild(cancelButton);
    addProjectPopup.appendChild(popupInput);
    addProjectPopup.appendChild(addProjectPopupButtons);
    projectsContainer.appendChild(addProjectPopup);


    let projectsList = document.createElement('div');
    projectsList.classList.add("projects-list");
    projectsContainer.appendChild(projectsList);

    //add project button
    let addProject = document.createElement("div");
    addProject.classList.add("sidebar-container");
    let addProjectImg = document.createElement("img")
    addProjectImg.src = "/images/plus.svg";
    let addProjectText = document.createElement("p");
    addProjectText.innerHTML = "Add Project";
    addProject.addEventListener("click", () => {
        addProject.style = "display: none";
        addProjectPopup.style = "display: block";
        //add button 
    })
    addProject.appendChild(addProjectImg);
    addProject.appendChild(addProjectText);
    projectsContainer.appendChild(addProject);

    return projectsContainer;
}

export {buildSidebar};