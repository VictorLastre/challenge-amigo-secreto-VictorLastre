// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;

  if (!nombre) {
    alert("Por favor ingrese un nombre..");
    return;
  }

  amigos.push(nombre); //agrega el nombre al array
  limpiarInput(); //Limpia el input
  agregarUltimoAmigo(); //agrega el ultimo amigo a la lista
}

function limpiarInput() {
  document.getElementById("amigo").value = "";
}

function agregarUltimoAmigo() {
  const lista = document.querySelector("#listaAmigos");
  const li = document.createElement("li");
  li.textContent = amigos[amigos.length - 1]; //Toma el ultimo amigo del array
  lista.appendChild(li); //Lo agrega como un nuevo <li>
}

function setearTexto(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  elemento.innerHTML = texto;
  return;
}

function sortearAmigo() {
  //Validar que haya al menos un amigo ene l array
  if (amigos.length === 0) {
    document.getElementById("resultado").innerHTML =
      "No hay amigos para sortear";
  }
}
