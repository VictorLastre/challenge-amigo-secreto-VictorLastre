// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
limpiarAmigoSorteado();
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
  let lista = document.querySelector("#listaAmigos");
  let li = document.createElement("li");
  li.textContent = amigos[amigos.length - 1]; //Toma el ultimo amigo del array
  lista.appendChild(li); //Lo agrega como un nuevo <li>
}

function setearTexto(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  elemento.innerHTML = texto;
  return;
}

function limpiarLista() {
  //selecciona el elemento de la lista y la vacia
  let lista = document.querySelector("#listaAmigos");
  lista.innerHTML = "";
}

function limpiarAmigoSorteado() {
  document.getElementById("resultado").innerHTML = "";
}

function sortearAmigo() {
  //Validar que haya al menos un amigo ene l array
  if (amigos.length === 0) {
    document.getElementById("resultado").innerHTML =
      "No hay amigos para sortear";
  }
  //Generar indice aleatorio
  let indicieAleatorio = Math.floor(Math.random() * amigos.length);

  //obtener nombre del array
  let amigoSorteado = amigos[indicieAleatorio];

  //mostar el resultado
  document.getElementById(
    "resultado"
  ).innerHTML = `Amigo sorteado <strong>${amigoSorteado}</strong>`;
  // Limpiar la lista de amigos que se ve
  limpiarLista();
}
