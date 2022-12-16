window.onload = function () {
    // Obtener el id de la url
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    fetch("http://localhost:3000/roles/" + id)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            addForm(data);
        })
        .catch((error) => {
            console.log(error);
        });

}

function addForm(data) {
    // agregar data a los values de los inputs
    document.getElementById("ROL_NAME").value = data[0].ROL_NAME;
    document.getElementById("hidden").value = data[0].ID_ROL;
}