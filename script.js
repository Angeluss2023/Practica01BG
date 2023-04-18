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
