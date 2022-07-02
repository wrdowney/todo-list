//builds footer of website

function buildFooter() {
    let footer = document.createElement('footer');
    let footerText = document.createElement('p');
    footerText.innerHTML = '© 2022 wrdowney';
    footer.appendChild(footerText);
    let footerLink = document.createElement('a');
    footerLink.href = 'https://github.com/wrdowney'
    let footerImg = document.createElement('img');
    footerLink.appendChild(footerImg);
    footerImg.src = '/images/github.svg';
    footer.appendChild(footerLink);

    return footer;
}

export {buildFooter}