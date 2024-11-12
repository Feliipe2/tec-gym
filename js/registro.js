const usercorreo = document.getElementById('idcorreo')
const username = document.getElementById('idusername')
const psw = document.getElementById('idclave')
const verifpsw = document.getElementById('idverifclave')
const btnIniciarSesion = document.getElementById('btn-registro');

btnIniciarSesion.addEventListener('click', function(e) {
    e.preventDefault();
    
    const datos=  {
        datausercorreo: usercorreo.value,
        datausername: username.value,
        datapsw: psw.value,
        dataverfipsw: verifpsw.value
    }
    /*
    console.log(datos)
    */

    if (datos.datausername === "" || datos.datausercorreo === "" || datos.datapsw === "" || datos.dataverfipsw === "") {
        alert("Usuario inválido, por favor llenar todos los campos");
    } else{
        if (datos.datapsw.length < 8) {
            alert("La contraseña debe tener al menos 8 caracteres");
        } else if (datos.datapsw != datos.dataverfipsw) {
            alert("Las contraseñas no coinciden");
        } else {
            window.location.href = 'index.html';
        }
    }
});