const idRol = 0;
window.onload = function () {
    fetch("http://localhost:3000/roles/")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            addForm(data);
            idRol = data[0].ID_ROL;
        })
        .catch((error) => {
            console.log(error);
        });

}