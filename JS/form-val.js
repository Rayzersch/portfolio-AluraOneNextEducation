var formulario = document.getElementById("formulario");
var input_nombre = document.getElementById("input-nombre").value;
var input_email = document.getElementById("input-email").value;
var input_asunto = document.getElementById("input-asunto").value;
var text_mensaje = document.getElementById("text-mensaje").value;
var boton_enviar = document.getElementById("boton-enviar");

function aviso(string) {
  alert("el campo de " + string + " soporta un maximo de 50 caracteres");
}

function validarFormulario(event) {
  event.preventDefault();

  if (input_nombre.length > 50) {
    aviso(Nombre);
    return;
  }

  if (input_asunto.length > 50) {
    aviso(Asunto);
    return;
  }

  if (text_mensaje.length > 350) {
    alert("el campo de Mensaje soporta un maximo de 350 caracteres");
    return;
  }

  this.submit();
}

document.addEventListener("DOMContentLoaded", () => {
  formulario.addEventListener("submit", validarFormulario);
});
