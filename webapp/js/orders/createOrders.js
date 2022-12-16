const idOrder = 0;
window.onload = function () {
    fetch("http://localhost:3000/orders")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            addForm(data);
            idOrder = data[0].ID_ORDER;
            console.log("idOrder = " + idOrder);
        })
        .catch((error) => {
            console.log(error);
        });

}

function addForm(data) {
    // agregar los options al select 
    const select = document.getElementById("order");
    for (let i = 0; i < data.length; i++) {
        const option = document.createElement("option");
        console.log(option);
        option.value = data[i].ID_ORDER;
        option.text = data[i].ID_CLIENT;
        option.text = data[i].ID_PERSONAL;
        option.text = data[i].ID_STORE;
        option.text = data[i].DESCRIPTION;
        select.appendChild(option);
    }
}