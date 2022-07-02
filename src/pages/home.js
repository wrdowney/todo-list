import { buildHeader } from "../components/header";

function loadHome() {
    let content = document.getElementById('content');
    content.appendChild(buildHeader());
}

export { loadHome };