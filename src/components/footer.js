//builds footer of website

function buildFooter() {
    let footer = document.createElement('footer');
    let footerText = document.createElement('a');
    footerText.innerHTML = '© 2022 wrdowney';
    footerText.href = 'github.com/wrdowney';
    footer.appendChild(footerText);
    let footerImg = document.createElement('img');
    footerImg.src = '/images/github.svg';
    footer.appendChild(footerImg);

    return footer;
}

export {buildFooter}