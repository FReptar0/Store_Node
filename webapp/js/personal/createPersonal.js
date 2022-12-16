const idPersonal = 0;
window.onload = function () {
    fetch("http://localhost:3000/personal/")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            idPersonal = data[0].ID_PERSONAL;
        })
        .catch((error) => {
            console.log(error);
        });

}



// function addForm2(data) {
//     // agregar los options al select
//     const select = document.getElementById("store");
//     for (let i = 0; i < data.length; i++) {
//         const option = document.createElement("option");
//         option.value = data[i].ID_STORE;
//         option.text = data[i].NAME;
//         select.appendChild(option);
//     }
// }