function tambienConoceVideos() {
    const cajaVideos = document.querySelectorAll('.cajaVideo');
    cajaVideos.forEach(caja => {
        caja.addEventListener('mouseenter', ()=>{
            const video = caja.querySelector('video');
            video.play();
        });
        caja.addEventListener('mouseleave', ()=>{
            const video = caja.querySelector('video');
            video.pause();
        });
    });
}
function linkPaginas() {
    const enlaces = document.querySelectorAll('.cajaVideo a');
    const cajaVideo = document.querySelectorAll('.cajaVideo');
    const cajaPaginas = document.getElementById('cajaPaginas');
    enlaces.forEach(link => {
        link.addEventListener('click', (e)=>{
            e.preventDefault();
            cajaPaginas.innerHTML="";
            cajaPaginas.style.width="100%";
            cajaPaginas.style.height="100%";
            cajaPaginas.style.background='white';
            switch(link.textContent) {
                case "Librería":
                    $(cajaPaginas).load('./paginas/paseoFeria/librerias.html');
                break;
                case "Mercado de Pulgas":
                break;
                case "Frutas y Verduras":
                break;
                case "Comida de Paso":
                    $(cajaPaginas).load('./paginas/paseoFeria/comida_paso.html');
                break;
                case "Artistas Callejeros":
                break;
            }
        });
    });
}
tambienConoceVideos();
linkPaginas();