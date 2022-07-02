//builds header of website

function buildHeader() {
    let header = document.createElement('header');

    let headerImg = document.createElement('img');
    headerImg.src = '/images/header-image.svg';
    header.appendChild(headerImg);

    let headerAccounts = document.createElement('div');
    headerAccounts.classList.add("accounts-container");
    let signUp = document.createElement('a');
    signUp.innerHTML = 'Sign Up';
    signUp.classList.add("header-link");
    let logIn = document.createElement('a');
    logIn.innerHTML = 'Log In';
    logIn.classList.add("header-link");
    headerAccounts.appendChild(signUp);
    headerAccounts.appendChild(logIn);
    header.appendChild(headerAccounts);

    //mobile dropdown menu
    let menu = document.createElement('a');
    let menuImg = document.createElement('img');
    menuImg.src = '/images/menu.svg';
    menu.appendChild(menuImg);
    menu.classList.add("menu-button");
    header.appendChild(menu);

    return header;
}

export {buildHeader};