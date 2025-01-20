// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
limpiarAmigoSorteado();
let amigos = [];

// Referencia al botón de sortear
const botonSortear = document.getElementById("botonSortear");

function agregarAmigo() {
  let nombre = document.getElementById("amigo").value;

  if (!nombre) {
    alert("Por favor ingrese un nombre..");
    return;
  }

  amigos.push(nombre); // Agrega el nombre al array
  limpiarInput(); // Limpia el input
  agregarUltimoAmigo(); // Agrega el último amigo a la lista
  actualizarEstadoBotonSortear(); // Actualiza el estado del botón
}

function limpiarInput() {
  document.getElementById("amigo").value = "";
}

function agregarUltimoAmigo() {
  let lista = document.querySelector("#listaAmigos");
  let li = document.createElement("li");
  li.textContent = amigos[amigos.length - 1]; // Toma el último amigo del array
  lista.appendChild(li); // Lo agrega como un nuevo <li>
}

function setearTexto(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  elemento.innerHTML = texto;
  return;
}

function limpiarLista() {
  // Selecciona el elemento de la lista y la vacía
  let lista = document.querySelector("#listaAmigos");
  lista.innerHTML = "";
}

function limpiarAmigoSorteado() {
  document.getElementById("resultado").innerHTML = "";
}

function sortearAmigo() {
  // Validar que haya al menos un amigo en el array
  if (amigos.length === 0) {
    document.getElementById("resultado").innerHTML =
      "No hay amigos para sortear";
    return;
  }

  // Generar índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener nombre del array
  let amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado
  document.getElementById(
    "resultado"
  ).innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
  // Limpiar la lista de amigos que se ve
  limpiarLista();
}

// Función para habilitar o deshabilitar el botón de sorteo
function actualizarEstadoBotonSortear() {
  botonSortear.disabled = amigos.length === 0;
}

// Llamar a la función al cargar la página para asegurarse de que el botón esté en el estado correcto
actualizarEstadoBotonSortear();
