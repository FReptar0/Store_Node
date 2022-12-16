window.onload = function () {
    // Obtener el id de la url
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    fetch("http://localhost:3000/personal/" + id)
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
    const hidden = document.getElementById("hidden");
    hidden.value = data[0].ID_PERSONAL;
    const fullname = document.getElementById("FULLNAME");
    fullname.value = data[0].FULLNAME;
    const email = document.getElementById("EMAIL");
    email.value = data[0].EMAIL;
    const password = document.getElementById("PASSWORD");
    password.value = data[0].PASSWORD;
}