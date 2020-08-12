const form_login = document.getElementById('formulario_login');
let email_bool=false;
let password_bool=false;

document.addEventListener('DOMContentLoaded', ()=>{
    form_login.reset();
})

form_login.addEventListener('input', (e)=>{
    const alert_email = document.querySelector('#alert_login_email');
    const alert_password = document.querySelector('#alert_login_password');
    if(e.target.id === 'login_correo') {
        e.target.addEventListener('keyup', ()=>{
            if(
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(e.target.value)
            ) {
                alert_email.style.color='green';
                alert_email.textContent='Email bien escrito';
                email_bool=true;
            } else {
                alert_email.style.display='block';
                alert_email.style.color='red';
                alert_email.textContent='Correo mal escrito';
                email_bool=false;
            }
        })
    } else if (e.target.id === 'login_password') {
        e.target.addEventListener('keyup', ()=>{
            if(e.target.value.length >= 8 && e.target.value.length <= 16) {
                password_bool=true;
            } else {
                password_bool=false;
            }
        })
    }
    if (email_bool && password_bool) {
        document.querySelector('#btn_envio').disabled=false;
    } else {
        document.querySelector('#btn_envio').disabled=true;
    }
});

form_login.addEventListener('submit', (e)=>{
    e.preventDefault();

    const datos = new FormData(form_login)

    const url = `server/login.php?tipo=comerciante`;
    /*
    const data = {
        correo: correo,
        password: password,
    };
    */

   fetch('server/login.php',{
    method: 'POST',
    body: datos,
})
    .then( res => res.json())
    .then( data => {
        console.log(data)
        if(data === 'error'){
            console.log(data);
        }else{
            console.log(data);
        }
    } )
})