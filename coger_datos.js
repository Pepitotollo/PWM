// En un entorno de navegador web
fetch('/base_datos.json') // Realiza una solicitud HTTP para cargar el archivo JSON
    .then(response => response.json()) // Convierte la respuesta en un objeto JavaScript
    .then(data => {
        // Aquí puedes trabajar con los datos del JSON
        console.log(data);

        // Por ejemplo, para acceder a la lista de productos:
        const productos = data.productos;
        console.log(productos);

        // Para acceder a la lista de usuarios:
        const usuarios = data.usuarios;
        console.log(usuarios);
    })
    .catch(error => console.error('Error al cargar el archivo JSON:', error));
