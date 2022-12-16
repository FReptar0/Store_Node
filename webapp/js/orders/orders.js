"strict";
let contador = 1;
fetch("http://localhost:3000/orders")
    .then((response) => response.json())
    .then((data) => {
        console.log("Data:");
        console.log(data);
        obtenerOrder(data);
    })
    .catch((error) => {
        console.log(error);
    });

const obtenerOrder = (data) => {
    const info = document.getElementById("contenido");
    data.forEach((order) => {
        info.innerHTML += `
                <tr>
                    <td>${order.ID_ORDER}</td>
                    <td>${order.ID_CLIENT}</td>
                    <td>${order.ID_PERSONAL}</td>
                    <td>${order.ID_STORE}</td>
                    <td>${order.DESCRIPTION}</td>
                    <td>
                        <a href="./editOrders.html?id=${order.ID_ORDER}" class="btn btn-outline-primary btn-sm">Editar</a>
                        <a href="./indexOrders.html?id=${order.ID_ORDER}&accion=delete" class="btn btn-outline-danger btn-sm">Eliminar</a>
                    </td>
                </tr>
                `;
    });
};