const index_categorias = document.getElementById('index_categorias');
const caja_slide = document.getElementById('slide-banner-feria');

document.addEventListener('DOMContentLoaded', ()=>{
    cargaSlide();
    cargaCategorias();
})

function cargaSlide() {
    const fragment = document.createDocumentFragment();
    // HEADER
    const head_slide = document.createElement('ol');
    head_slide.setAttribute('id', 'carousel-indicators');
    slide.map((slide, index) => {
        const li = document.createElement('li');
        li.setAttribute('data-target', '#slide-banner-feria');
        li.setAttribute('data-slide-to', `${index+1}`);
        if (slide.active) { li.setAttribute('class', 'active'); }
        head_slide.appendChild(li);
    });
    fragment.appendChild(head_slide);

    // FOOTER


    // BODY
    const div1 = document.createElement('div');
    slide.map(slide=>{
        const div2 = document.createElement('div');
        const img = document.createElement('img');
        const div3 = document.createElement('div');
        const div4 = document.createElement('div');
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        const link = document.createElement('a');

        link.setAttribute('href', slide.link);
        link.setAttribute('class', 'btn-get-started scrollto');
        link.textContent=slide.link;
        h2.textContent=slide.h2;
        h1.textContent=slide.h1;

        div4.setAttribute('class', 'col-xl-6 pb-5 d-lg-block d-sm-none');
        div4.appendChild(h1); div4.appendChild(h2); div4.appendChild(link);

        div3.setAttribute('class', 'carousel-caption text-left d-md-block pb-5');
        div3.appendChild(div4);

        img.setAttribute('class', 'd-block w-100');
        img.setAttribute('src', slide.src);

        div2.setAttribute('id', 'slide-caja');
        if (slide.active) { div2.setAttribute('class', 'carousel-item active'); }
        else { div2.setAttribute('class', 'carousel-item'); }

        div2.appendChild(img);
        div2.appendChild(div3);

        div1.setAttribute('class', 'carousel-inner');
        div1.appendChild(div2);
    });
    fragment.appendChild(div1);
    caja_slide.appendChild(fragment);
};

function cargaCategorias() {
    const fragment = document.createDocumentFragment();
    categorias.map(cate=>{
        const div1 = document.createElement('div');
        const divBrillo = document.createElement('div');
        const div2 = document.createElement('div');
        const img = document.createElement('img');
        const i = document.createElement('i');
        const p = document.createElement('p');
        const link = document.createElement('a');

        div1.classList.add('col-lg-3');
        div1.classList.add('col-md-6');
        div1.classList.add('col-sm-12');
        div1.classList.add('caja_categoria');
        
        img.setAttribute('src', cate.img);
        img.classList.add('img-fluid');
        img.classList.add('img_categoria');
        
        i.setAttribute('class', cate.icon);
        
        p.setAttribute('class', 'mb-0 mt-2');
        p.textContent=cate.txt;
        
        link.appendChild(i);
        link.setAttribute('href', '#');
        link.appendChild(p);
        
        div2.classList.add(cate.class);
        div2.appendChild(link);
        
        divBrillo.setAttribute('id', 'brillo_categoria');

        div1.appendChild(divBrillo);
        div1.appendChild(div2);
        div1.appendChild(img);
        fragment.appendChild(div1);
    });
    const titulo = document.createElement('h1');
    titulo.textContent='Conocé los puestos';
    titulo.classList.add('col-12');
    titulo.classList.add('text-center');
    titulo.classList.add('py-3');
    titulo.classList.add('titulo_seccion');
    index_categorias.appendChild(titulo);
    index_categorias.appendChild(fragment);
}