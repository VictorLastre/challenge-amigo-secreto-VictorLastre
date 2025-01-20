# Amigos Secreto Sorteo

Este proyecto tiene como objetivo fortalecer las habilidades en lógica de programación mediante la creación de una 
aplicación simple que permite gestionar una lista de amigos y realizar un sorteo aleatorio entre ellos.

## Características

- **Agregar amigos**: Permite a los usuarios agregar nombres a una lista.
- **Mostrar amigos**: Muestra los amigos agregados en una lista visual.
- **Sortear amigo**: Selecciona aleatoriamente un nombre de la lista.
- **Limpiar lista**: Borra todos los nombres visualizados en la lista después del sorteo.
- **Limpiar resultado**: Elimina el mensaje del amigo sorteado.

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript

## Cómo usar

1. **Clonar el repositorio**:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. **Abrir el archivo HTML**:
   Navega al directorio del proyecto y abre el archivo `index.html` en tu navegador preferido.

3. **Interacción con la aplicación**:
   - Agrega nombres en el campo de texto y haz clic en "Agregar Amigo".
   - Visualiza los nombres agregados en la lista.
   - Haz clic en "Sortear Amigo" para seleccionar uno aleatoriamente.
   - El resultado del sorteo aparecerá en la sección de resultado.

## Estructura del proyecto

```
.
├── index.html
├── styles.css
├── script.js
└── README.md
```

- **index.html**: Contiene la estructura básica de la aplicación.
- **styles.css**: Define los estilos visuales de la interfaz.
- **script.js**: Implementa la lógica del programa.
- **README.md**: Documentación del proyecto.

## Lógica del programa

El proyecto incluye las siguientes funciones principales:

- **agregarAmigo()**: Agrega un nombre al array `amigos` y actualiza la lista visual.
- **limpiarInput()**: Limpia el campo de entrada después de agregar un nombre.
- **agregarUltimoAmigo()**: Muestra el último amigo agregado en la lista visual.
- **setearTexto()**: Cambia el contenido de un elemento HTML específico.
- **limpiarLista()**: Limpia todos los elementos de la lista visual.
- **limpiarAmigoSorteado()**: Limpia el mensaje del amigo sorteado.
- **sortearAmigo()**: Selecciona aleatoriamente un nombre del array `amigos` y lo muestra en la sección de resultado.

## Mejoras futuras

- Agregar validación para evitar nombres duplicados en la lista.
- Permitir la edición o eliminación de nombres individuales.
- Implementar una opción para guardar la lista de amigos entre sesiones usando `localStorage`.
- Agregar una interfaz más amigable con iconos y estilos avanzados.

## Contribuir

Si deseas contribuir a este proyecto:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tu función o corrección.
   ```bash
   git checkout -b mi-nueva-funcion
   ```
3. Realiza tus cambios y haz un commit.
   ```bash
   git commit -m "Agregé una nueva función"
   ```
4. Envía un pull request describiendo tus cambios.

## Licencia

Este proyecto está bajo la licencia MIT. Puedes usarlo y modificarlo libremente.

---

¡Gracias por explorar este proyecto! Si tienes algún comentario o sugerencia, no dudes en contactarme.

