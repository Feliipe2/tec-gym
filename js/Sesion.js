const usrnm = document.getElementById('username');
const psw = document.getElementById('password');
const btn = document.getElementById('btnsesion');

btn.addEventListener('click', (e) =>{
    e.preventDefault()
    
    const datos = {
        datauser: usrnm.value,
        datapsw: psw.value
    }

    console.log(datos)
})