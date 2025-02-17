// Ejercicio 1
console.log("Ejercicio 1 antes");
    import "./aboutme.js";
console.log("Ejercicio 1 después");

// Ejercicio 2
//
// Se ejecuta primero el contenido de aboutme.js 
// Esto ocurre, no por el orden en que aparece su referencia en el fichero index.js sino porque en primer lugar se evalúan los IMPORT incluídos en el fichero
// Este comportamiento fue validado, incorporando una sentencia console.log() antes de la sentencia IMPORT y el resultado expuesto en CONSOLA confirmó la evaluación del IMPORT
// para luego visualizar los dos console.log del Ejercicio 1.

// Ejercicio 3
//
// INSPECCIONAR : Permite acceder a un ambiente en el que se puede tener un acabado control del código que está siendo ejecutado en el Browser.
//                Dentro de las principales Funcionales se encuentran :
// ELEMENTOS    : Permite revisar el código que sustenta la interfaz que es expuesta a los usuarios.
//                De esta forma, es posible identificar secciones específicas del código para su revisión o corrección.
// CONSOLA      : Permite el ingreso de sentencias en Código Javascrip para así evaluar su comportamiento. 
//                Además permite visualizar resultados de los distintos componentes (SOURCES) que están siendo ejecutados.
// SOURCES      : Permite la revisión de los distintos ficheros que componen un aplicativo. 
//                Permite además, establecer Breakpoints para realizar Debugging del aplicativo en tiempo de ejecución.
//                También es posible definir Variables específicas para conocer su comportamiento durante el proceso de Debugging
//                Otro aspecto muy relevante, es que permite además conocer el SCOPE del código en ejecución, así como el CALL STACK  

// Ejercicio 4
import "./divisibles_x_7.js";
console.log("Ejercicio 4");

// Ejercicio 5
//
// SCRIPTS o CLASSIC SCRIPT es el uso más básico y directo de Javascript.
// Organizar el código en MODULE SCRIPTS permite :
// 1.- Definir de acuerdo a su lógica componentes más pequeños e independiente y que pueden ser invocados desde otras secciones de una solución
// 2.- Permiten implementar el concepto de "Separación de Preocupaciones"
// 3.- Permiten ser invocados vía IMPORT
// 4.- Siempre se ejecutan en STRICT MODE
// 5.- Todos los objetos contenidos en el MODULE son privados para el módulo, a menos que se use EXPORT para ampliar su SCOPE.
// 6.- MODULE son cargados de forma asincrona y evaluados nada más al IMPORTARSE.

// Ejercicio 6
import "./creaobjeto.js";
console.log("Ejercicio 6");
//
//let formatter = {
//    prefix: "Hello",
//    append: function(texto){
//               console.log(formatter.prefix + " " + texto);
//    }
//};
//
//formatter.toLowerString = function (texto2) {
//    console.log(texto2.toLowerCase());
//};
