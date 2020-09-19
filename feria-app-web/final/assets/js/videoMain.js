function videoPlay () {
    const btnMainOnOff = document.getElementById('btnView');
    // Botones control main
    const btnPlayPause = document.getElementById('btnPlayPause');
    const btnVol = document.getElementById('btnVol');
    const btnFullScreen = document.getElementById('btnFullScreen');

    const videoMain = document.getElementById('videoMainM4v');
    let stateView = false; let statePlay = false; let stateVol = false; let stateFullScreen = false;

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


videoPlay();