window.onload = function () {
    // Obtener el id de la url
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    fetch("http://localhost:3000/clients/" + id)
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
    document.getElementById("HIDDEN").value = data[0].ID_CLIENT;
    document.getElementById("FULLNAME").value = data[0].FULLNAME;
    //poner value a el email
    document.getElementById("EMAIL").value = data[0].EMAIL;
    document.getElementById("PASSWORD").value = data[0].PASSWORD;
    // ADDRESS
    document.getElementById("ADDRESS").value = data[0].ADDRESS;   
    // CITY
    document.getElementById("CITY").value = data[0].CITY;
    // STATE
    document.getElementById("STATE").value = data[0].STATE;
    // ZIP
    document.getElementById("ZIPCODE").value = data[0].ZIPCODE;
    // COUNTRY
    document.getElementById("COUNTRY").value = data[0].COUNTRY;
    // PHONE
    document.getElementById("PHONE").value = data[0].PHONE;

}