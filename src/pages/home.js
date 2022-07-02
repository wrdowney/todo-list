import { buildHeader } from "../components/header";
import { buildSidebar} from "../components/sidebar";
import { buildFooter } from "../components/footer";

function loadHome() {
    let content = document.querySelector("body");
    content.appendChild(buildHeader());
    let main = document.createElement('div');
    main.classList.add("main");
    main.appendChild(buildSidebar());
    let currentProject = document.createElement('div');
    currentProject.classList.add("current-project");
    main.appendChild(currentProject);
    content.appendChild(main);
    content.appendChild(buildFooter());
}

export { loadHome };