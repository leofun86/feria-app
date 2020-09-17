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
const btnInicio = document.getElementById('btnInicio');
const btnComoLlegar = document.getElementById('btnComoLlegar');

const cajaPaginas = document.getElementById('cajaPaginas');

document.addEventListener('DOMContentLoaded', ()=>{
    cargaMenu();
    cajasMenu()
    scrollFooter();
})

function cargaMenu() {
    btnInicio.addEventListener('click', (e)=>{
        e.preventDefault();
        cajaPaginas.innerHTML="";
        cajaPaginas.style.width="100%";
        cajaPaginas.style.height="100%";
        cajaPaginas.style.background='white';
        $(cajaPaginas).load('main.html');
    });
    btnComoLlegar.addEventListener('click', (e)=>{
        e.preventDefault();
        cajaPaginas.innerHTML="";
        cajaPaginas.style.width="100%";
        cajaPaginas.style.height="100%";
        cajaPaginas.style.background='white';
        $(cajaPaginas).load('como_llegar.html');
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