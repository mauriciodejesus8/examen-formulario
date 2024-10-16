const form = document.getElementById('registrationForm');
const resultDiv = document.getElementById('result');
const countDiv = document.getElementById('count');

let datos = [];

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const correo = document.getElementById('correo').value;
    const direccion = document.getElementById('direccion').value;
    const edad = document.getElementById('edad').value;
    const genero = document.getElementById('genero').value;

    
    if (!nombre || !apellido || !telefono || !correo || !direccion || !edad || !genero) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    
    const nuevoRegistro = { nombre, apellido, telefono, correo, direccion, edad, genero };

    
    datos.push(nuevoRegistro);


    resultDiv.innerHTML += `
        <div class="card">
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Apellido:</strong> ${apellido}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Correo:</strong> ${correo}</p>
            <p><strong>Dirección:</strong> ${direccion}</p>
            <p><strong>Edad:</strong> ${edad}</p>
            <p><strong>Género:</strong> ${genero}</p>
        </div>
    `;

    
    countDiv.innerHTML = `<p>Cantidad de registros: ${datos.length}</p>`;

    
    form.reset();
});