"strict";
let contador = 1;
fetch("http://localhost:3000/products")
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
                    <td>${proveedores.ID_PRODUCT}</td>
                    <td>${proveedores.NAME}</td>
                    <td>${proveedores.PRICE}</td>
                    <td>${proveedores.STOCK}</td>
                    <td>${proveedores.DESCRIPTION}</td>
                    <td>${proveedores.ID_STORE}</td>
                    <td>
                        <a href="./editProducts.html?id=${proveedores.ID_PRODUCT}" class="btn btn-outline-primary btn-sm">Editar</a>
                        <a href="./indexProducts.html?id=${proveedores.ID_PRODUCT}&accion=delete" class="btn btn-outline-danger btn-sm">Eliminar</a>
                    </td>
                </tr>
                `;
    });
};