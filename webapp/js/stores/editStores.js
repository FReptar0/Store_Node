window.onload = function () {
    // Obtener el id de la url
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    fetch("http://localhost:3000/stores/" + id)
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
    // agregar data a variables
    // obtener primera posicion del array

    // agregar data a los values de los inputs
    document.getElementById("hidden").value = data[0].ID_STORE;
    document.getElementById("name").value = data[0].NAME;
    document.getElementById("address").value = data[0].ADDRESS;
    document.getElementById("city").value = data[0].CITY;
    document.getElementById("state").value = data[0].STATE;
    document.getElementById("zipcode").value = data[0].ZIPCODE;
    document.getElementById("country").value = data[0].COUNTRY;
    document.getElementById("phone").value = data[0].PHONE;
}
