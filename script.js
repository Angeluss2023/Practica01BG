function cambiarColor(color) {
  document.body.style.color = color;
}
function cambiarTamano(tamano) {
  document.body.style.fontSize = tamano;
}
function cambiarFuente(fuente) {
  document.body.style.fontFamily = fuente;
}
const contactForm = document.getElementById('contact-form');
const formResult = document.getElementById('form-result');

contactForm.addEventListener('submit');
$(document).ready(function () {
  // Agregar animación de desplazamiento suave a la barra de navegación
  $('.navbar-link').click(function (event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top - 100,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
