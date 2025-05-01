// Variables globales
var totalPedidos = 5;
let usuariosActivos = 2145;

// Datos - Primitivos
let idPedido = 558;                  // INT
let seccion = "Carrito de Compras";  // String
let esPremium = false;               // Boolean
let metodoEnvio = 'E';               // Char (E = Envío expres)
let totalAPagar = 799.99;            // Float
let fechaEntrega;                    // Undefined

// Datos - Compuestos
let productosFavoritos = ["Galaxy S24", "MacBook Air", "PlayStation 5"]; // Array
let carrito = {
  id: 1023,
  usuario: "juan.perez",
  items: 3,
  total: 799.99,
  incluidos: ["Cargador USB-C", "Funda protectora"]
};

// Strings
let tituloSeccion = "Carrito de Compras";
tituloSeccion.length;               // longitud del texto
tituloSeccion.toUpperCase();        // MAYÚSCULAS
tituloSeccion.toLowerCase();        // minúsculas
tituloSeccion.trim();               // elimina espacios
tituloSeccion.includes("Carrito");   // true o false

// ES6 – Template strings
console.log("Bienvenido a la sección: " + tituloSeccion);
console.log(`Bienvenido a la sección: ${tituloSeccion}`);

// ES6 – Numbers
let cuotasString = "6";
console.log(cuotasString + 2);      // "62"
console.log(+cuotasString + 2);     // 8

console.log(4 * 3 ** 2);            // potencia (4 * 9 = 36)

// Boolean
let stockMaximo = 20;
let stockRequerido = "20";

console.log(stockMaximo == stockRequerido);   // true
console.log(stockMaximo === stockRequerido);  // false

// Condicionales
let historialCompras = [];
if (historialCompras.length > 0) {
  console.log("Tienes compras anteriores");
} else {
  console.log("No hay historial de compras");
}

// ES6 – Operador ternario
historialCompras.length === 0
  ? console.log("Historial vacío")
  : console.log("Mostrando historial");

// ES6 – Ternario con mensaje extendido
historialCompras.length === 0
  ? console.log("Historial vacío\nExplora productos para comprar")
  : console.log("Historial cargado\nPuedes revisar tus compras");

// Funciones
// Función declarada
function actualizarCantidad() {
  console.log("Cantidad de productos actualizada");
}

// Función expresada
const validarStock = function() {
  console.log("Stock verificado correctamente");
};

// ES6 – Función flecha
const enviarNotificacion = () => {
  console.log("Notificación de envío enviada al usuario");
};

