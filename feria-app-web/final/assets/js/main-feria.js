const index_categorias = document.getElementById('index_categorias');
const caja_slide = document.getElementById('slide-banner-feria');
const caja_subcategorias = document.getElementById('modal_subcategorias');
//const caja_menu = document.getElementById('menu_feria');
const caja_menu_feria = document.getElementById('cajaMenuVer');
const contenedor_paginas = document.getElementById('contenedor_paginas');

// VIDEO
const videoMain = document.getElementById('videoMainM4v');

// BOTONES CONTROL MAIN
const btnMainOnOff = document.getElementById('btnView');
const btnPlayPause = document.getElementById('btnPlayPause');
const btnVol = document.getElementById('btnVol');
const btnFullScreen = document.getElementById('btnFullScreen');
let stateView = false; let statePlay = false; let stateVol = false; let stateFullScreen = false;

// BOTONES INFO
const btnMainInfoOn = document.getElementById('btnInfoOn');
const btnMainInfoOff = document.getElementById('btnInfoOff');


const menuCaja1 = document.getElementById('menu-caja-1');
const menuCaja2 = document.getElementById('menu-caja-2');
const menuCaja3 = document.getElementById('menu-caja-3');

// MENU
const btnComoLlegar = document.getElementById('btnComoLlegar');

const cajaPaginas = document.getElementById('cajaPaginas');

document.addEventListener('DOMContentLoaded', ()=>{
    videoPlay();
    cargaMenu();
})

function cargaMenu() {
    btnComoLlegar.addEventListener('click', (e)=>{
        e.preventDefault();
        console.log('Funciona');
        cajaPaginas.innerHTML="";
        cajaPaginas.style.width="100%";
        cajaPaginas.style.height="100%";
        cajaPaginas.style.background='white';
        $(cajaPaginas).load('como_llegar.html');
    });
}

function videoPlay () {
    const iconView = document.querySelector('#btnView i');

    btnPlayPause.addEventListener('click', ()=>{
        const iconPlay = document.querySelector('#btnPlayPause i');
        if (!statePlay) {
            videoMain.pause();
            iconPlay.removeAttribute('class');
            iconPlay.setAttribute('class', 'fas fa-play');
            statePlay=true;
        } else {
            videoMain.play();
            iconPlay.removeAttribute('class');
            iconPlay.setAttribute('class', 'fas fa-pause');
            statePlay=false;
        }
    });

    btnVol.addEventListener('click', ()=>{
        const iconVol = document.querySelector('#btnVol i');
        if (!stateVol) {
            videoMain.muted=false;
            iconVol.removeAttribute('class');
            iconVol.setAttribute('class', 'fas fa-volume-up');
            stateVol=true;
        } else {
            videoMain.muted=true;
            iconVol.removeAttribute('class');
            iconVol.setAttribute('class', 'fas fa-volume-mute');
            stateVol=false;
        }
    });

    btnFullScreen.addEventListener('click', ()=>{
        if (videoMain.requestFullscreen) {
            videoMain.controls=true;
            videoMain.requestFullscreen();
        }
    });

    btnMainOnOff.addEventListener('click', (e)=>{
        const h1 = document.querySelector('#mainFeria h1');
		const h2 = document.querySelector('#mainFeria h2');
        const logo1 = document.querySelector('#logoMainCenter');
        const logo2 = document.querySelector('#logoMainLeft');
        const redes = document.querySelector('#mainFeria  #redes');
        const div = document.querySelector('#mainFeria > div');
        if (!stateView) {
            $(h1).fadeToggle();
			$(h2).fadeToggle();
            $(logo1).fadeToggle();
            setTimeout(()=>{ $(logo2).fadeToggle(); }, 500);
            $(redes).fadeToggle();
            //$(div).fadeToggle();
            iconView.removeAttribute('class');
            iconView.setAttribute('class', 'fas fa-eye-slash');
            stateView=true;
        } else {
            $(h1).fadeToggle();
			$(h2).fadeToggle();
            $(logo1).fadeToggle();
            $(logo2).fadeToggle();
			$(redes).fadeToggle();
            //$(div).fadeToggle();
            iconView.removeAttribute('class');
            iconView.setAttribute('class', 'fas fa-eye');
            stateView=false;
        }    
    });
}

btnMainInfoOn.addEventListener('click', ()=>{
    setTimeout(()=>{
        $('#mainInfo').fadeToggle('slow');
    }, 200);
});
btnMainInfoOff.addEventListener('click', ()=>{
    setTimeout(()=>{
        $('#mainInfo').fadeToggle('slow');
    }, 200);
});

