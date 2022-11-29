
function redireccion(){
    location.href = "registro"
}

const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const contraseña = document.getElementById('contraseña');
const button = document.getElementById('button');

button.addEventListener('click', (e) => {
    e.preventDefault()
    const data ={
        nombre: nombre.value,
        correo: correo.value,
        contraseña: contraseña,

    }
    console.log(data)
}

)



function redireccionar(){
    location.href = "senakitch/index.html"
}




