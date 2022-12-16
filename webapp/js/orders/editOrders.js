const idOrder = 0;
window.onload = function () {
    // Obtener el id de la url
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    // obtener el id del campo oculto
    const idOrder = document.getElementById("hidden").value;

    fetch("http://localhost:3000/orders/" + id)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            addForm(data);
            idOrder = data[0].ID_ORDER;
        })
        .catch((error) => {
            console.log(error);
        });
}
function addForm(data) {
    // agregar data a los values de los inputs
    document.getElementById("id_store").value = data[0].ID_STORE;
    document.getElementById("id_client").value = data[0].ID_CLIENT;
    document.getElementById("id_personal").value = data[0].ID_PERSONAL;
    document.getElementById("description").value = data[0].DESCRIPTION;
}