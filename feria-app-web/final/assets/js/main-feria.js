const index_categorias = document.getElementById('index_categorias');
const caja_slide = document.getElementById('slide-banner-feria');
const caja_subcategorias = document.getElementById('modal_subcategorias');
//const caja_menu = document.getElementById('menu_feria');
const caja_menu_feria = document.getElementById('cajaMenuVer');
const contenedor_paginas = document.getElementById('contenedor_paginas');

const menuCaja1 = document.getElementById('menu-caja-1');
const menuCaja2 = document.getElementById('menu-caja-2');
const menuCaja3 = document.getElementById('menu-caja-3');

// MENU
const btnHamburguesa = document.getElementById('btnHamburguesa');
const btnInicio = document.getElementById('btnInicio');
const btnComoLlegar = document.getElementById('btnComoLlegar');
const btnQuienesSomos = document.getElementById('btnQuienesSomos');
const btnContacto = document.getElementById('btnContacto');
const cajaMainMenu = document.getElementById('cajaMainMenu');
const botonesCaja1 = document.querySelectorAll('#menu-caja-1 h5');
const botonesCaja2 = document.querySelectorAll('#menu-caja-2 a');
    // SUBMENU
    const btnTiempo = document.getElementById('btnTiempo');
    const cajaTiempo = document.getElementById('cajaTiempo');

// PÁGINAS
const cajaPaginas = document.getElementById('cajaPaginas');

document.addEventListener('DOMContentLoaded', ()=>{
    cargaMenu();
    cajasMenu()
    cargaSubmenu();
    scrollFooter();
    btnMainInfo();
})

function cargaSubmenu() {
    const btnCerrarTiempo = cajaTiempo.querySelector('button');
    const btnSub = document.getElementById('btnSubMenu');
    const cajaSubMenu = document.getElementById('cajaSubMenu');

    btnSub.addEventListener('click', ()=>{
        btnSub.classList.forEach(item => {
            if (item == "subRotateIn") {
                btnSub.classList.remove('subRotateIn');
                btnSub.classList.add('subRotateOut');
            } else if (item == "subRotateOut") {
                btnSub.classList.remove('subRotateOut');
                btnSub.classList.add('subRotateIn');
            } else {
                btnSub.classList.add('subRotateIn');
            }
        });
        cajaSubMenu.classList.forEach(item=>{
            if (item == "cajaSubMenuIn") {
                cajaSubMenu.classList.remove('cajaSubMenuIn');
                cajaSubMenu.classList.add('cajaSubMenuOut');
            } else if (item == "cajaSubMenuOut") {
                cajaSubMenu.classList.remove('cajaSubMenuOut');
                cajaSubMenu.classList.add('cajaSubMenuIn');
            } else {
                cajaSubMenu.classList.add('cajaSubMenuIn');
            }
        });
        $(cajaSubMenu).fadeToggle();
    });
    btnTiempo.addEventListener('click', ()=>{
        $(cajaTiempo).fadeToggle();
    });
    btnCerrarTiempo.addEventListener('click', ()=>{
        $(cajaTiempo).fadeToggle();    
    });
}

function cargaMenu() {
    btnHamburguesa.addEventListener('click', ()=>{
        $(cajaMainMenu).slideToggle();
    });
    botonesCaja1.forEach(btn => {
        btn.addEventListener('click', ()=>{
            cajaPaginas.innerHTML="";
            cajaPaginas.style.width="100%";
            cajaPaginas.style.height="100%";
            cajaPaginas.style.background='white';
            switch (btn.textContent) {
                case "INICIO":
                    $(cajaPaginas).load('./paginas/main.html');
                break;
                case "CÓMO LLEGAR":
                    $(cajaPaginas).load('./paginas/como_llegar.html');
                break;
                case "QUIENES SOMOS":
                break;
                case "CONTACTO":
                break;
            }
            $(cajaMainMenu).slideToggle();
        })
    });
    botonesCaja2.forEach(btn => {
        btn.addEventListener('click', ()=>{
            cajaPaginas.innerHTML="";
            cajaPaginas.style.width="100%";
            cajaPaginas.style.height="100%";
            cajaPaginas.style.background='white';
            switch (btn.textContent) {
                case "Librería":
                break;
                case "Mercado de Pulgas":
                break;
                case "Frutas y Verduras":
                break;
                case "Comida de paso":
                    $(cajaPaginas).load('./paginas/paseoFeria/comida_paso.html');
                break;
                case "Artistas callejeros":
                break;
            }
            $(cajaMainMenu).slideToggle();
        })
    });
}

function scrollFooter() {
    const footer = document.querySelector('footer');
    if (window.screen.availWidth <= 900) {
        $(window).scroll(function(event) {
            let scrollTop = $(window).scrollTop();
            if(scrollTop > 80) {
                $(footer).fadeOut();
            } else if (scrollTop < 80) {
                $(footer).fadeIn();
            }
        });        
    }
}

function cajasMenu() {
    menuCaja1.addEventListener('mouseenter', ()=>{
        const videoCaja1 = document.querySelector('#menu-caja-1 video');
        videoCaja1.play();
    });
    menuCaja1.addEventListener('mouseleave', ()=>{
        const videoCaja1 = document.querySelector('#menu-caja-1 video');
        videoCaja1.pause();
    });
    menuCaja2.addEventListener('mouseenter', ()=>{
        const videoCaja1 = document.querySelector('#menu-caja-2 video');
        videoCaja1.play();
    });
    menuCaja2.addEventListener('mouseleave', ()=>{
        const videoCaja1 = document.querySelector('#menu-caja-2 video');
        videoCaja1.pause();
    });
}

function btnMainInfo() {
    // Botones INFO
    const btnMainInfoOn = document.getElementById('btnInfo');
    const btnMainInfoOff = document.getElementById('btnInfoOff');
    
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
}