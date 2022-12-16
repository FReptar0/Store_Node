window.onload = function () {
    // Obtener el id de la url
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    fetch("http://localhost:3000/providers/" + id)
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
    document.getElementById("fullname").value = data[0].FULLNAME;
    document.getElementById("email").value = data[0].EMAIL;
    document.getElementById("address").value = data[0].ADDRESS;
    document.getElementById("city").value = data[0].CITY;
    document.getElementById("state").value = data[0].STATE;
    document.getElementById("zipcode").value = data[0].ZIPCODE;
    document.getElementById("country").value = data[0].COUNTRY;
    document.getElementById("phone").value = data[0].PHONE;
    document.getElementById("hidden").value = data[0].ID_PROVIDER;
}