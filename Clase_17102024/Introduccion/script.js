document.title = 'Iniciar sesión';

//Crear contenedor principal para el formulario
const container = document.createElement('div');
container.style.margin = '20px';

//Crear título
const title = document.createElement('h2');
title.textContent = 'Iniciar Sesión';
container.appendChild(title);

//Crear el formulario
const form = document.createElement('form');

//Crear campo de nombre de usuario
const usernameLabel = document.createElement('label');
usernameLabel.textContent = 'Nombre de usuari@ ';
const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.required = true;
form.appendChild(usernameLabel);
form.appendChild(usernameInput);

//Crear campo de contraseña
const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Contraseña ';
const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.required = true;
form.appendChild(passwordLabel);
form.appendChild(passwordInput);

//Crear botón de envío
const submitButton = document.createElement('button');
submitButton.textContent = 'Iniciar Sesión';
form.appendChild(submitButton);

//Mensaje de respuesta
const message = document.createElement('p');
container.appendChild(form);
container.appendChild(message);

//Agregar el contenedor al cuerpo del documento
document.body.appendChild(container);

//DATOS DE INICIO DE SESION PREDEFINIDA
const validaUser = 'Santiago';
const validaPassword = '1ab2be3a0f';

//Validar el user y el password
form.addEventListener('submit', (event) => {
    event.preventDefault();

    //Validar el nombre y password
    if (usernameInput.value === validaUser && passwordInput.value === validaPassword) {
        message.textContent = '¡Bienvenido!';
        message.style.color = 'green';
    } else {
        message.textContent = 'No te conozco';
        message.style.color = 'red';
    }

    //Limpiar inputs
    usernameInput.value = '';
    passwordInput.value = '';
})
