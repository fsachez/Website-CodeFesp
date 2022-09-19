// Se capturan los elementos, esto devuelve un arreglo.
const botonNumbers = document.getElementsByName("data-number");
const botonOpera = document.getElementsByName("data-opera");
const botonIgual = document.getElementsByName("data-igual")[0];
const botonDelete = document.getElementsByName("data-delete")[0];
var result = document.getElementById("resultado");
var opeActual = '';
var opeAnterior = '';
var operacion = undefined;

// Se recorren los arreglos y se agregan los eventos.
botonNumbers.forEach((boton) => {
  boton.addEventListener("click", () => {
    agregarNumber(boton.innerText);
  });
});

botonOpera.forEach((boton) => {
  boton.addEventListener("click", () => {
    agregarOpera(boton.innerText);
  });
});

botonIgual.addEventListener("click", () => {
  calcular();
  actualizarDisplay();
});

botonDelete.addEventListener("click", () => {
  clear();
  actualizarDisplay();
});

// Programar los métodos de la calculadora.
function agregarNumber(num) {
  opeActual = opeActual.toString() + num.toString();
  actualizarDisplay();
};

function actualizarDisplay() {
  result.value = opeActual;
};

function agregarOpera(op) {
  if(opeActual === '') return;
  if(opeAnterior !== '') {
    calcular();
  }
  operacion = op.toString();
  opeAnterior = opeActual;
  opeActual = '';
}

function calcular() {
  var calculo;
  const anterior = parseFloat(opeAnterior);
  const actual = parseFloat(opeActual);
  if(isNaN(anterior) || isNaN(actual)) return;
  switch(operacion) {
    case '+':
      calculo = anterior + actual;
      break;
    case '-':
      calculo = anterior - actual;
      break;
    case 'x':
      calculo = anterior * actual;
      break;
    case '/':
        calculo = anterior / actual;
        break;
    default:
      return;
  }
  opeActual = calculo;
  operacion = undefined;
  opeAnterior = '';
}

function clear() {
  opeActual = "";
  opeAnterior = "";
  operacion = undefined;
}

clear();


