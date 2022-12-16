const idPersonal = 0;
window.onload = function () {
    // Obtener el id de la url
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    // obtener el id del campo oculto
    const idStore = document.getElementById("hidden").value;

    fetch("http://localhost:3000/personal/" + id)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            addForm(data);
            idPersonal = data[0].ID_PERSONAL;
        })
        .catch((error) => {
            console.log(error);
        });

}

function addForm(data) {
    // agregar data a los values de los inputs
    document.getElementById("FULLNAME").value = data[0].FULLNAME;
    document.getElementById("EMAIL").value = data[0].EMAIL;
    document.getElementById("PASSWORD").value = data[0].PASSWORD;
    document.getElementById("hidden").value = data[0].ID_PERSONAL;
}