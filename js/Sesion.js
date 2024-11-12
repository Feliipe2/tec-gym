const usrnm = document.getElementById('idcorreo');
const psw = document.getElementById('password');
const btn = document.getElementById('btnsesion');

btn.addEventListener('click', (e) =>{
    e.preventDefault()
    
    const datos = {
        datauser: usrnm.value,
        datapsw: psw.value
    }

    console.log(datos)
    if (datos.datauser === "" || datos.datapsw === "") {
        alert("Usuario inválido, por favor llenar todos los campos");
    } else {
        window.location.href = 'index.html';
    }
})