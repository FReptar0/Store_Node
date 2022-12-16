"strict";
let contador = 1;
fetch("http://localhost:3000/clients")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        obtenerClientes(data);
    })
    .catch((error) => {
        console.log(error);
    });

const obtenerClientes = (data) => {
    const info = document.getElementById("contenido");
    data.forEach((clientes) => {
        info.innerHTML += `
                <tr>
                    <td>${clientes.ID_CLIENT}</td>
                    <td>${clientes.FULLNAME}</td>
                    <td>${clientes.EMAIL}</td>
                    <td>${clientes.ADDRESS}</td>
                    <td>${clientes.CITY}</td>
                    <td>${clientes.STATE}</td>
                    <td>${clientes.ZIPCODE}</td>
                    <td>${clientes.COUNTRY}</td>
                    <td>${clientes.PHONE}</td>
                    <td>
                        <a href="./editClients.html?id=${clientes.ID_CLIENT}" class="btn btn-outline-primary btn-sm">Editar</a>
                        <a href="./indexClient.html?id=${clientes.ID_CLIENT}&accion=delete" class="btn btn-outline-danger btn-sm">Eliminar</a>
                    </td>
                </tr>
                `;
    });
};