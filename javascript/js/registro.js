const categoria = document.getElementById('reg_categoria');
const sub_categoria = document.getElementById('reg_sub_categoria');
const btnEnviar = document.getElementById('btn_envio');

const array_sub_categorias = {
    plantas_animales: [
        {
            txt: 'Mascotas',
            value: 'perros_gatos'
        },
        {
            txt: 'Animales voladores',
            value: 'aves'
        },
        {
            txt: 'Animales acuáticos',
            value: 'peces'
        },
    ],  
    frutas_verduras: [
        {
            txt: 'Frutas y verduras',
            value: 'frutas_verduras'
        },
        {
            txt: 'Frutas y verduras orgánicas',
            value: 'frutas_verduras_orgánicas'
        }
    ],
    anticuarios: [
        {
            txt: 'Muebles antiguos',
            value: 'muebles_antiguos',
        },
        {
            txt: 'Decoración',
            value: 'decoracion'
        }
    ],
    libros_revistas: [
        {
            txt: 'Libros',
            value: 'libros'
        },
        {
            txt: 'Revistas',
            value: 'revistas'
        },
        {
            txt: 'Colecciones',
            value: 'colecciones'
        },
        {
            txt: 'novelas',
            value: 'novelas'
        },
    ],
    vestimenta: [
        {
            txt: 'Ropa deportiva',
            value: 'ropa_deportiva'
        },
        {
            txt: 'Ropa formal',
            value: 'ropa_formal'
        },
        {
            txt: 'Ropa infantil',
            value: 'ropa_infantil'
        }
    ],
    mercado_pulgas: [
        {
            txt: 'Artesanías',
            value: 'artesanias'
        },
        {
            txt: 'Mixto',
            value: 'mixto'
        }
    ],
};

categoria.addEventListener('change', (e)=>{
    sub_categoria.innerHTML='';
    const fragment = document.createDocumentFragment();
    const option_selected = document.createElement('option');
    option_selected.textContent='Seleccione';
    option_selected.selected=true;
    fragment.appendChild(option_selected); 
    const value_target = e.target.value;
    array_sub_categorias[value_target].forEach(sub => {
        const option = document.createElement('option');
        option.setAttribute('value', sub.value);
        option.textContent=sub.txt;
        fragment.appendChild(option);
    });

    sub_categoria.appendChild(fragment);
    sub_categoria.style.display='block';
})

btnEnviar.addEventListener('click', (e)=>{
    e.preventDefault();
    const nombre = e.target.parentElement.parentElement.querySelector('#reg_nombre').value;
    const apellido = e.target.parentElement.parentElement.querySelector('#reg_apellido').value;
    const correo = e.target.parentElement.parentElement.querySelector('#reg_correo').value;
    const sexo = e.target.parentElement.parentElement.querySelector('#reg_sexo').value;
    const ci = e.target.parentElement.parentElement.querySelector('#reg_cedula').value;
    const password = e.target.parentElement.parentElement.querySelector('#reg_password').value;

    const url = 'server/alta_usuario.php';
    const data = {
        ci: ci,
        password: password,
        nombre: nombre,
        apellido: apellido,
        sexo: sexo,
        correo: correo
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json',
        }
    }).then(res => res)
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Éxito:', response));
})


