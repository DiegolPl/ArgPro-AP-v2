let btnMenu = document.getElementById('menu-btn');

btnMenu.addEventListener('click', ()=> {
    btnMenu.classList.toggle('fa-bars');
    btnMenu.classList.toggle('fa-xmark');

    document.getElementById('menu-navbar').classList.toggle('d-flex');
    document.getElementById('menu-navbar').classList.toggle('d-none');
})