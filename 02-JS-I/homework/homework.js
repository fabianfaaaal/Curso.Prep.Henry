// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "hola henry";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 10;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  var letras = str;
  return(letras);
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var sumando = x + y;
  return(sumando);
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var restando = x - y;
  return(restando);
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var multiplicando = x * y;
  return(multiplicando);
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var dividiendo = x / y;
  return(dividiendo);
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  var control = null;
  if(x == y){
    control = true;
  }else{
    control = false;

  }
  return(control);
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  var controllongitud = null;
  if(str1.length == str2.length){
    controllongitud = true;
  }else{
    controllongitud = false;
  }
  return(controllongitud);
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  var controlmenor = null;
  if (num < 90) {
    controlmenor = true;
  }else{
    controlmenor = false;    
  }
  return(controlmenor);
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  var controlmenor = null;
  if (num > 50) {
    controlmenor = true;
  }else{
    controlmenor = false;    
  }
  return(controlmenor);
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  var restos = x % y;
  return(restos);
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  var pares = 0;
  var controlpares = null;
  pares = num % 2;
  if(pares == 0){
    controlpares = true;
    }else{
    controlpares = false;
  }
  return(controlpares);
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  var impares = 0;
  var controlimpares = null;
  impares = num % 2;
  if(impares == 0){
    controlimpares = false;
    }else{
    controlimpares = true;
  }
  return(controlimpares);
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  var cuadrado = Math.pow(num, 2);
  return(cuadrado);
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  var cubo = Math.pow(num, 3);
  return(cubo);
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  var elevado = Math.pow(num, exponent);
  return(elevado);
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  var redondeo = Math.round(num);
  return(redondeo);

}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  var redondeoarriba = Math.ceil(num);
  return(redondeoarriba);
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  var aleatorio = Math.random();
  return(aleatorio);
  //Creada una variable 'aleatorio' a la que asignamos el resultado de ejecutar el método random de la clase Math. El número aleatorio que obtenemos siempre estará comprendido entre 0 y 1.
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  var comprobacionp = null;
  var numerito = Math.sign(numero);
  if(numerito == 0){
    comprobacionp = false;
  }else{
    if(numerito == -1){
      comprobacionp = "Es negativo";
    }else{
      comprobacionp = "Es positivo";
    }
  }
  return(comprobacionp);
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  var str1 = "!";
  var strtotal = str.concat(str1);
  return(strtotal);

}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var strespacio = " ";
  var strtotal2 = nombre.concat(strespacio, apellido);
  return(strtotal2);
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  var str1 = "!";
  var strespacio = " ";
  var saludo = "Hola";
  var strtotal3 = saludo.concat(strespacio, nombre, str1);
  return(strtotal3);
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  var arearect = alto * ancho;
  return(arearect);
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  var perimetrocuadr = lado * 4;
  return(perimetrocuadr);
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  var areatrian = (base*altura)/2;
  return(areatrian);
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  var dolares = euro*1.20;
  return(dolares);
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  //Escribe tu código aquí
  var vocales = ["a", "e", "i", "o", "u"]; //vector con las vocales.
  var mensaje = "Dato incorrecto"; //string que muestra mensaje si se ingresa erroneamente.

  if (letra.length <= 0) {
    return(mensaje);
  }else{
    if (letra.length > 1) {
      return(mensaje);     
    }else{
      if(vocales.indexOf(letra) === -1){
        return(mensaje);
      }else{
        return("Es vocal");
      }
    }
  }

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
