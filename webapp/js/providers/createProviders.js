const idProvider = 0;
window.onload = function () {
    fetch("http://localhost:3000/providers/")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            addForm(data);
            idProvider = data[0].ID_PROVIDER;
        })
        .catch((error) => {
            console.log(error);
        });

}



