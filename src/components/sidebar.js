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

    let projects = document.createElement('div');
    projects.classList.add("project-container");
    let projectTitle = document.createElement('div');
    projectTitle.innerHTML = "Projects";
    let addProject = document.createElement("div");
    addProject.classList.add("sidebar-container");
    let addProjectImg = document.createElement("img")
    addProjectImg.src = "/images/plus.svg";
    let addProjectText = document.createElement("p");
    addProjectText.innerHTML = "Add Project";
    addProject.appendChild(addProjectImg);
    addProject.appendChild(addProjectText);
    projects.appendChild(projectTitle);
    projects.appendChild(addProject);

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

export {buildSidebar};