# Documentación: TheHuddle-8

Esta guía documenta los conceptos fundamentales utilizados en este proyecto para facilitar su re-implementación desde cero.

---

## 1. Express.js: Middlewares
Los middlewares son funciones que se ejecutan entre la petición (`req`) y la respuesta (`res`).

### `express.urlencoded({ extended: true })`
*   **Función**: Analiza los datos enviados mediante formularios HTML (`application/x-www-form-urlencoded`).
*   **Detalle**: Convierte las cadenas de texto (`key=value`) en objetos JavaScript dentro de `req.body`.
*   **Configuración**: `extended: true` permite objetos y arreglos complejos usando la librería `qs`.

### `express.json()`
*   **Función**: Analiza peticiones que contienen JSON (`application/json`).
*   **Detalle**: Es fundamental para APIs; sin este, `req.body` será `undefined` al recibir datos desde `fetch` o `axios`.

### `method-override`
*   **Función**: Permite usar verbos HTTP que los navegadores no soportan nativamente en formularios (PUT, DELETE).
*   **Uso**: Se configura con una clave (`_method`) que se añade como parámetro de consulta en la URL del formulario.

### `express.static()`
*   **Función**: Sirve archivos estáticos (CSS, JS, imágenes).
*   **Detalle**: Hace accesibles los archivos contenidos en una carpeta (ej. `public`) sin necesidad de crear rutas individuales.

---

## 2. Mongoose: Modelado de Datos
Mongoose es la herramienta para interactuar con MongoDB desde Node.js.

### Esquemas (`Schema`)
Definen la estructura de los datos:
```javascript
const linkSchema = new mongoose.Schema({
  url: { type: String, required: true },
  votos: { type: Number, default: 0 }
}, { timestamps: true }); // Crea automáticamente createdAt y updatedAt
```

### Modelos (`Model`)
Son los objetos que interactúan directamente con la base de datos:
*   `find()`: Recupera documentos.
*   `findById(id)`: Recupera un documento por ID.
*   `create(data)`: Crea e inserta un documento.
*   `findByIdAndUpdate(id, data)`: Busca y actualiza.
*   `findByIdAndDelete(id)`: Busca y borra.
*   `findOneAndUpdate(filter, update)`: Actualiza según criterios complejos.

---

## 3. Arquitectura MVC (Modelo-Vista-Controlador)

### Modelo (`/models`)
Responsable de definir la estructura y lógica de los datos.

### Controlador (`/controllers`)
Contiene la lógica de negocio. Recibe `req` y `res`, interactúa con el Modelo y decide qué vista renderizar.

### Rutas (`/routes`)
Definen los puntos de entrada (endpoints) de la aplicación y asocian cada ruta con una función del controlador.

### Vista (`/views` con EJS)
Plantillas que mezclan HTML con JavaScript.
*   `<%= variable %>`: Imprime el valor (escapado).
*   `<%- include('path') %>`: Incluye archivos parciales (partials).
*   `<% %>`: Permite ejecutar lógica de JS (bucles, condicionales).

---

## 4. Frontend: Estilos y Estructura
*   **CSS Semántico**: Uso de clases con nombres descriptivos (`.card`, `.btn-primary`) en lugar de clases de utilidad masivas.
*   **Partials**: División de vistas comunes (header, footer, componentes repetitivos) para mejorar la mantenibilidad.
