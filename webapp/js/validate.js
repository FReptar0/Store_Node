// validar que exista el token en localstorage
if (localStorage.getItem('token')) {
    // si existe el token en localstorage se redirecciona a la pagina principal
    window.location.href = 'home.html';
}else{
    // si no existe el token en localstorage se redirecciona a la pagina de login
    window.location.href = 'index.html';
}