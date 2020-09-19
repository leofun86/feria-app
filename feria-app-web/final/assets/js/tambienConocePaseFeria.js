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
                    $(cajaPaginas).load('./paginas/proximamente.html');
                break;
                case "Mercado de Pulgas":
                    $(cajaPaginas).load('./paginas/proximamente.html');
                break;
                case "Frutas y Verduras":
                    $(cajaPaginas).load('./paginas/proximamente.html');
                break;
                case "Comida de Paso":
                    $(cajaPaginas).load('./paginas/paseoFeria/comida_paso.html');
                break;
                case "Artistas Callejeros":
                    $(cajaPaginas).load('./paginas/proximamente.html');
                break;
            }
        });
    });
}
tambienConoceVideos();
linkPaginas();