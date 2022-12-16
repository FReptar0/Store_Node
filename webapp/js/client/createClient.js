const idProvider = 0;
window.onload = function () {
    fetch("http://localhost:3000/clients/")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            addForm(data);
            idClient = data[0].ID_CLIENT;
        })
        .catch((error) => {
            console.log(error);
        });

}