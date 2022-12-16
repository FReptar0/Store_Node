"strict";
let contador = 1;
fetch("http://localhost:3000/roles")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        obtenerRoles(data);
    })
    .catch((error) => {
        console.log(error);
    });

const obtenerRoles = (data) => {
    const info = document.getElementById("contenido");
    data.forEach((roles) => {
        info.innerHTML += `
                <tr>
                    <td>${roles.ID_ROL}</td>
                    <td>${roles.ROL_NAME}</td>
                    <td>
                        <a href="./editRoles.html?id=${roles.ID_ROL}" class="btn btn-outline-primary btn-sm">Editar</a>
                        <a href="./indexRoles.html?id=${roles.ID_ROL}&accion=delete" class="btn btn-outline-danger btn-sm">Eliminar</a>
                    </td>
                </tr>
                `;
    });
};