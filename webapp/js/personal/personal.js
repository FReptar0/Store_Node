"strict";
fetch("http://localhost:3000/personal")
    .then((response) => response.json())
    .then((data) => {
        console.log("Data:");
        console.log(data);
        obtenerPersonal(data);
    })
    .catch((error) => {
        console.log(error);
    });

const obtenerPersonal = (data) => {
    const info = document.getElementById("contenido");
    data.forEach((personal) => {
        info.innerHTML += `
                <tr>
                    <td>${personal.ID_PERSONAL}</td>
                    <td>${personal.FULLNAME}</td>
                    <td>${personal.EMAIL}</td>
                    <td>${personal.ID_ROL}</td>
                    <td>${personal.ID_STORE}</td>
                    <td>
                        <a href="./editPersonal.html?id=${personal.ID_PERSONAL}" class="btn btn-outline-primary btn-sm">Editar</a>
                        <a href="./indexPersonal.html?id=${personal.ID_PERSONAL}&accion=delete" class="btn btn-outline-danger btn-sm">Eliminar</a>
                    </td>
                </tr>
                `;
    });
};