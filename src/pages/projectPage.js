import Task from '/src/data/Task';
import { updateProjectPage } from '../website';

//loads a page for a specific project

function loadProjectPage(project) {
    let projectSection = document.querySelector('.current-project');
    projectSection.innerHTML = '';

    let pageTitle = document.createElement('h1');
    pageTitle.innerHTML = project.name;
    projectSection.appendChild(pageTitle);

    let tasksContainer = document.createElement('div');
    tasksContainer.classList.add('tasks-container');

    for(let i = 0; i < project.tasks.length; i++) {
        let task = document.createElement('div');
        task.classList.add('task');
        let taskName = document.createElement('p');
        taskName.innerHTML = project.tasks[i].name;
        let taskDate = document.createElement('p');
        taskDate.innerHTML = project.tasks[i].dueDate;
        let taskRemove = document.createElement('img');
        taskRemove.src = '/images/close.svg';
        taskRemove.addEventListener('click', () => {
            project.tasks.splice(i, 1);
            updateProjectPage(project);
        });
        task.appendChild(taskName);
        task.appendChild(taskDate);
        task.appendChild(taskRemove);
        tasksContainer.appendChild(task);
    }

    let addTaskButton = document.createElement('div');
    addTaskButton.classList.add('add-task-button');
    let addTaskButtonImg = document.createElement('img');
    addTaskButtonImg.src = '/images/plus.svg';
    let addTaskButtonText = document.createElement('p');
    addTaskButtonText.innerHTML = 'Add Task';
    addTaskButton.appendChild(addTaskButtonImg);
    addTaskButton.appendChild(addTaskButtonText);

    let addTaskPopup = document.createElement('div');
    addTaskPopup.classList.add('add-task-popup');
    addTaskPopup.style.display = 'none';

    let addTaskPopupName = document.createElement('input');
    addTaskPopupName.classList.add('add-task-popup-name');
    addTaskPopupName.placeholder = 'Task name';
    addTaskPopup.appendChild(addTaskPopupName);

    //bring up add task popup menu on clicking add task button
    addTaskButton.addEventListener('click', () => {
        addTaskButton.style = 'display: none';
        addTaskPopup.style = 'display: block';
    });

    let addTaskPopupAddButtton = document.createElement('button');
    addTaskPopupAddButtton.innerHTML = 'Add';
    addTaskPopupAddButtton.addEventListener('click', () => {
        project.addTask(new Task(addTaskPopupName.value));
        addTaskPopup.style.display = 'none';
        addTaskButton.style = 'display: flex';
        updateProjectPage(project);
    });
    addTaskPopup.appendChild(addTaskPopupAddButtton);

    let addTaskPopupCancelButton = document.createElement('button');
    addTaskPopupCancelButton.innerHTML = 'Cancel';
    addTaskPopupCancelButton.addEventListener('click', () => {
        addTaskPopup.style.display = 'none';
        addTaskButton.style = 'display: flex';
    });
    addTaskPopup.appendChild(addTaskPopupCancelButton);
    projectSection.appendChild(addTaskButton);
    projectSection.appendChild(addTaskPopup);
    projectSection.appendChild(tasksContainer);
}

export { loadProjectPage };