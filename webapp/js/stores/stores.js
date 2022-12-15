"strict";
let contador = 1;
fetch("http://localhost:3000/stores")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        obtenerProveedores(data);
    })
    .catch((error) => {
        console.log(error);
    });

const obtenerProveedores = (data) => {
    const info = document.getElementById("contenido");
    data.forEach((proveedores) => {
        info.innerHTML += `
                <tr>
                    <td>${proveedores.ID_STORE}</td>
                    <td>${proveedores.NAME}</td>
                    <td>${proveedores.ADDRESS}</td>
                    <td>${proveedores.CITY}</td>
                    <td>${proveedores.STATE}</td>
                    <td>${proveedores.ZIPCODE}</td>
                    <td>${proveedores.COUNTRY}</td>
                    <td>${proveedores.PHONE}</td>
                    <td>
                        <a href="./editStores.html?id=${proveedores.ID_STORE}" class="btn btn-outline-primary btn-sm">Editar</a>
                        <a href="./indexStores.html?id=${proveedores.ID_STORE}&accion=delete" class="btn btn-outline-danger btn-sm">Eliminar</a>
                    </td>
                </tr>
                `;
    });
};