function validarFormulario() {
  // Obtener los valores de los campos del formulario
  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  var mensaje = document.getElementById('mensaje').value;

  // Validar que el nombre no esté vacío
  if (nombre === '') {
    document.getElementById('errorNombre').innerText =
      'Por favor ingrese su nombre';
    return false;
  } else {
    document.getElementById('errorNombre').innerText = '';
  }

  // Validar que el email sea válido
  var emailRegEx = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!email.match(emailRegEx)) {
    document.getElementById('errorEmail').innerText =
      'Por favor ingrese un email válido';
    return false;
  } else {
    document.getElementById('errorEmail').innerText = '';
  }

  // Validar que el mensaje no esté vacío
  if (mensaje === '') {
    document.getElementById('errorMensaje').innerText =
      'Por favor ingrese un mensaje';
    return false;
  } else {
    document.getElementById('errorMensaje').innerText = '';
  }

  // Enviar el formulario si todos los campos son válidos
  return true;
}
