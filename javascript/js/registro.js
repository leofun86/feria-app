const categoria = document.getElementById('reg_categoria');
const sub_categoria = document.getElementById('reg_sub_categoria');
const form_registro_visitante = document.getElementById('formulario-registro-visitante');
const form_registro_comerciante = document.getElementById('formulario-registro-comerciante');
const btn_envio = document.getElementById('btn_envio');
let email_bool=false; let documento_bool=false; let password_bool=false;

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

/*
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
*/

form_registro_comerciante.addEventListener('input', (e)=> {
    const alert_email = document.querySelector('#alert_email');
    const alert_documento = document.querySelector('#alert_documento');
    if(e.target.id === 'reg_correo') {
        e.target.addEventListener('keyup', ()=>{
            if(
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(e.target.value)
            ) {
                alert_email.style.color='green';
                alert_email.textContent='Email correcto';
                email_bool=true;
                //setTimeout(()=>{ alert_email.style.display='none'; }, 1000);
            } else {
                alert_email.style.display='block';
                alert_email.style.color='red';
                alert_email.textContent='El email no existe';
                email_bool=false;
            }
        })
    } else if (e.target.id === 'reg_documento') {
        e.target.addEventListener('keyup', ()=>{
            if(e.target.value.length === 8) {
                if(validarDocumento(e.target.value)) {
                    alert_documento.style.color='green';
                    alert_documento.textContent='Documento válido';
                    documento_bool=true;
                    //setTimeout(()=>{ alert_documento.style.display='none'; }, 1000);
                } else {
                    alert_documento.style.display='block';
                    alert_documento.style.color='red';
                    alert_documento.textContent='Documento inválido';
                    documento_bool=false;
                }
            }
        })
    } else if(e.target.id === 'reg_password') {
        e.target.addEventListener('keyup', ()=>{
            if (e.target.value.length > 7 && e.target.value.length < 17) {
                password_bool=true;
            } else {
                password_bool=false;
            }
        });
    }

    if (email_bool && documento_bool && password_bool) { btn_envio.disabled=false; } else { btn_envio.disabled=true; }

});

form_registro_comerciante.addEventListener('submit', (e)=>{
    e.preventDefault();
    /*
        const nombre = e.target.querySelector('#reg_nombre').value;
        const apellido = e.target.querySelector('#reg_apellido').value;
        const sexo = e.target.querySelector('#reg_sexo').value;
        const nombre_puesto = e.target.querySelector('#reg_nombre_puesto').value;
        const tipo = e.target.querySelector('#reg_tipo').value;
        const calle = e.target.querySelector('#reg_calle').value;
        const numero = Number(e.target.querySelector('#reg_numero').value);
        const extra_calle = e.target.querySelector('#reg_extra_calle').value;
        const categoria = e.target.querySelector('#reg_categoria').value;
        const sub_categoria = e.target.querySelector('#reg_sub_categoria').value;
    */
    const ci = e.target.querySelector('#reg_documento').value;
    const correo = e.target.querySelector('#reg_correo').value;
    const password = e.target.querySelector('#reg_password').value;

    const url = 'server/alta_usuario.php?tipo=comerciante';
    const data = {
        // Datos personales
        ci: ci,
        password: password,
            /*
            nombre: nombre,
            apellido: apellido,
            sexo: sexo,
            */
        correo: correo,
        // Datos puesto
            /*
            nombre_puesto: nombre_puesto,
            tipo: tipo,
            calle: calle,
            numero: numero,
            extra_calle: extra_calle,
            categoria: categoria,
            sub_categoria: sub_categoria
            */
    };

    console.log(data);
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json',
        }
    }).then(res => res)
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Éxito:', response));

});

function validarDocumento(documento) {
    const arrCoefs = new Array(2, 9, 8, 7, 6, 3, 4, 1);
    let suma = 0;
    const difCoef = parseInt(arrCoefs.length - documento.length);
    for (var i = documento.length - 1; i > -1; i--) {
        let dig = documento.substring(i, i + 1);
        let digInt = parseInt(dig);
        let coef = arrCoefs[i + difCoef];
        suma = suma + digInt * coef;
    }
    if ((suma % 10) === 0) { return true; } else { return false; }
}


