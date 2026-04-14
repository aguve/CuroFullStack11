// Crear y llamar a una función flecha que recibe un número y muestre su cubo con un console.log.
const cubo = param => {
    const resultado = param * param * param;
    console.log(resultado)
}

cubo(4); 

// Crear y llamar a una función flecha que recibe la velocidad en Km/hora y la devuelva en en metros/hora. Recoger el valor devuelto y mostrarlo con un console.log.
const mHora = param => {
    const result = param * 1000;
    console.log(result)
}

mHora(36);

// Crea y llamar a una función flecha que recibe el ancho y el alto de un rectángulo y devuelva su área.
const areaR = (b, a) => {
  const result = b * a;
  console.log(result);
}

areaR(32,2);

// Crear y llamar a una función flecha que recibe la base y la altura de un triángulo y devuelva su área.
const areaT = (b, a) => {
  const result = (b*a)/2;
  console.log(result);
}

areaT(32,2);

// Perímetro de la circunferencia = 2*Math.PI*radio
const calculatePerimeter = param => {
  const result = 2 * Math.PI * param;
  console.log(result);
}

calculatePerimeter(5);

// Área de la circunferencia = Math.PI*radio*radio
const calculateArea = param => {
  const result = Math.PI * param * param;
  console.log(result);
}

calculateArea(5);

// de Celcius a Fahranheit
const cel2fahr = param => {
  const result = (param * (9/5)) + 32;
  console.log(result);
}

cel2fahr(30);


// factorial de num
function factorialRecursivo(num){
  if (num < 0) {
    return 1;
  } else if (num < 2) {
    return 1;
  } else {
    return num * factorialRecursivo(num - 1);
}
}
let resultadoR = factorialRecursivo(7);
console.log(resultadoR);