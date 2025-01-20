// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;

  if (!nombre) {
    alert("Por favor ingrese un nombre..");
    return;
  } else {
    limpiarInput();
    amigos.push(nombre);
    console.log(amigos);
  }
}

function limpiarInput() {
  document.querySelector("#amigo").value = "";
}

function setearTexto(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  elemento.innerHTML = texto;
  return;
}
