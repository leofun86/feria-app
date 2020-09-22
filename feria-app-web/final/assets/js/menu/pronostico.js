async function pronostico() {
    const cajaDelTiempo = document.getElementById('cajaDelTiempo');
    const fragment = document.createDocumentFragment();

    const titulo = document.createElement('h6');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const iframe = document.createElement('iframe');

    titulo.setAttribute('id', 'tituloTiempo');
    titulo.setAttribute('style', 'border-radius:5px 5px 0px 0px;margin-top:10px;position:absolute;left:25px;padding:5px 10px;color:white;background:black;z-index:2222;display:none;');
    titulo.textContent='Pronóstico para el domingo';
    iframe.setAttribute('src', 'https://freemeteo.com.uy/eltiempo/montevideo/pronostico-diario/dia6/?gid=3441575&language=spanishar&country=uruguay');
    iframe.setAttribute('style', 'width:1000px;height:580px;position:relative;bottom:370px;right:35px;');
    iframe.setAttribute('frameborder', '0');
    div3.setAttribute('style', 'position:absolute;top:-12px;width:100%;height:100%;background:transparent;z-index:222;');
    div2.setAttribute('style', 'display:inline-block;position:relative;right:140px;bottom:5px;');
        div2.appendChild(div3);
        div2.appendChild(iframe);
    div1.setAttribute('id', 'cajaTiempo');
    div1.setAttribute('style', 'border-radius:0px 10px 20px 40px;margin-top:39px;margin-bottom:0px!important;scale:1;position:absolute;left:25px;width:360px;height:140px;overflow:hidden;text-align:center;z-index:2221!important;box-shadow:2px 2px 5px #222;display:none;');
        div1.appendChild(div2);
    fragment.appendChild(titulo);
    fragment.appendChild(div1)
    cajaDelTiempo.appendChild(fragment);
}
pronostico();
