// En un entorno de navegador web

function rellenar_cuadrados () {
        fetch('/base_datos.json') // Realiza una solicitud HTTP para cargar el archivo JSON
            .then(response => response.json()) // Convierte la respuesta en un objeto JavaScript
            .then(data => {
                    // Aquí puedes trabajar con los datos del JSON
                    //console.log(data);

                    // Por ejemplo, para acceder a la lista de productos:
                    const productos = data.productos;
                    console.log(productos);

                    // Para acceder a la lista de usuarios:
                    const usuarios = data.usuarios;
                    //console.log(usuarios);
                    var i=0;
                    productos.forEach(productos => {
                        const imagen = document.createElement('img');
                        imagen.src = productos.imagen
                        imagen.alt = productos.nombre
                        if(i==0){espacio1_div1.appendChild(imagen)}
                        if(i==1){espacio1_div2.appendChild(imagen)}
                        if(i==2){espacio1_div3.appendChild(imagen)}
                        i++;

                    });


            })
            .catch(error => console.error('Error al cargar el archivo JSON:', error));
}

function cargarModuloYAsignarIDs(contenedorID, moduloID) {
        // Obtener el contenedor donde se cargará el módulo
        var contenedor = document.getElementById(contenedorID);
        var elementos = contenedor.getElementsByClassName("espacio")

        // Clonar el contenido del módulo

        // Obtener los elementos dentro del módulo clonado

        // Iterar sobre los elementos y asignar IDs únicos
        for (var i = 0; i < elementos.length; i++) {

                elementos[i].id = moduloID + "_div" + (i + 1);

                console.log(elementos[i].id);
                //contenedor.setAttribute("id", elementos[i].id);

        }
        document.getElementById(contenedorID);

        // Agregar el módulo clonado al contenedor
}
