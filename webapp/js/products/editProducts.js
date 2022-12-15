const idStore = 0;
window.onload = function () {
    // Obtener el id de la url
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    // obtener el id del campo oculto
    const idStore = document.getElementById("hidden").value;

    fetch("http://localhost:3000/products/" + id)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            addForm(data);
            idStore = data[0].ID_STORE;
        })
        .catch((error) => {
            console.log(error);
        });

}

function addForm(data) {
    // agregar data a los values de los inputs
    document.getElementById("name").value = data[0].NAME;
    document.getElementById("description").value = data[0].DESCRIPTION;
    document.getElementById("price").value = data[0].PRICE;
    document.getElementById("stock").value = data[0].STOCK;
    document.getElementById("hidden").value = data[0].ID_PRODUCT;
}