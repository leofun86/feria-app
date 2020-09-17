

function cargaBotones() {
    const cajaMapa = document.getElementById('mapaBuses');
    const busD10 = document.getElementById('busD10');
    const bus494 = document.getElementById('bus494');
    const bus137 = document.getElementById('bus137');
    const bus128 = document.getElementById('bus128');
    const bus121 = document.getElementById('bus121');

    console.log('Hola');
    console.log(cajaMapa.contentWindow.document.querySelector('side-bar'));

    busD10.style.cursor='pointer';
    bus494.style.cursor='pointer';
    bus137.style.cursor='pointer';
    bus128.style.cursor='pointer';
    bus121.style.cursor='pointer';

    const btnCerrarMapaBuses = document.getElementById('btnCerrarMapa');

    btnCerrarMapaBuses.addEventListener('click', ()=>{
        $(cajaMapa.parentElement).fadeToggle();
    });

    busD10.addEventListener('click', ()=>{
        cajaMapa.removeAttribute('src');
        cajaMapa.setAttribute('src', 'https://moovitapp.com/montevideo-1672/poi/Feria de Tristán Narvaja/Movie/es-419?tll=-34.899993_-56.17876&fll=-34.881376_-56.080975&customerId=4908&ref=1&poiType=efsite');
        $(cajaMapa.parentElement).fadeToggle();
    });
    
    bus494.addEventListener('click', ()=>{
        cajaMapa.removeAttribute('src');
        cajaMapa.setAttribute('src', 'https://moovitapp.com/montevideo-1672/poi/Feria%20de%20Trist%C3%A1n%20Narvaja/Universidad%20ORT%20-%20Campus%20Av%20Uruguay/es-419?tll=-34.899993_-56.17876&fll=-34.902989_-56.1909&routeTypes=bus&ref=1&poiType=efsite&customerId=4908');
        cajaMapa.parentElement.style.display='block';
    });
    
    bus137.addEventListener('click', ()=>{
        cajaMapa.removeAttribute('src');
        cajaMapa.setAttribute('src', 'https://moovitapp.com/montevideo-1672/poi/Feria%20de%20Trist%C3%A1n%20Narvaja/Palermo/es-419?tll=-34.899993_-56.17876&fll=-34.910877_-56.181647&routeTypes=bus&ref=1&poiType=efsite&customerId=4908');
        cajaMapa.parentElement.style.display='block';
    });
    
    bus128.addEventListener('click', ()=>{
        cajaMapa.removeAttribute('src');
        cajaMapa.setAttribute('src', 'https://moovitapp.com/montevideo-1672/poi/Feria%20de%20Trist%C3%A1n%20Narvaja/Rambla%20Pocitos/es-419?tll=-34.899993_-56.17876&fll=-34.915206_-56.149046&routeTypes=bus&ref=1&poiType=efsite&customerId=4908');
        cajaMapa.parentElement.style.display='block';
    });
    
    bus121.addEventListener('click', ()=>{
        cajaMapa.removeAttribute('src');
        cajaMapa.setAttribute('src', 'https://moovitapp.com/montevideo-1672/poi/Feria%20de%20Trist%C3%A1n%20Narvaja/Wasabi%20Marketing%20Digital/es-419?tll=-34.899993_-56.17876&fll=-34.904604_-56.164684&routeTypes=bus&ref=1&poiType=efsite&customerId=4908');
        cajaMapa.parentElement.style.display='block';
    });
}

cargaBotones();