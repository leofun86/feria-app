const favicon = document.getElementById('icono-menu');
let giroBool = false;

favicon.addEventListener('click', ()=> {
    if (!giroBool) {
        favicon.classList.remove('fav-giro-out');
        favicon.classList.add('fav-giro-in');
        menu.style.display='block';
        menu.classList.remove('menu-out');
        menu.classList.add('menu-in');
        giroBool=true;
    } else {
        favicon.classList.remove('fav-giro-in');
        favicon.classList.add('fav-giro-out');
        menu.classList.remove('menu-in');
        menu.classList.add('menu-out');
        setTimeout(()=>{ menu.style.display='none'; }, 500);
        giroBool=false;
    }  
});