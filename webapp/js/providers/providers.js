"strict";
let contador = 1;
fetch("http://localhost:3000/providers")
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
                    <td>${proveedores.ID_PROVIDER}</td>
                    <td>${proveedores.FULLNAME}</td>
                    <td>${proveedores.EMAIL}</td>
                    <td>${proveedores.ADDRESS}</td>
                    <td>${proveedores.CITY}</td>
                    <td>${proveedores.STATE}</td>
                    <td>${proveedores.ZIPCODE}</td>
                    <td>${proveedores.COUNTRY}</td>
                    <td>${proveedores.PHONE}</td>
                    <td>
                        <a href="./editProviders.html?id=${proveedores.ID_PROVIDER}" class="btn btn-outline-primary btn-sm">Editar</a>
                        <a href="./indexProviders.html?id=${proveedores.ID_PROVIDER}&accion=delete" class="btn btn-outline-danger btn-sm">Eliminar</a>
                    </td>
                </tr>
                `;
    });
};