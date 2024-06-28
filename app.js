const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

function openMenu(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', openMenu);

