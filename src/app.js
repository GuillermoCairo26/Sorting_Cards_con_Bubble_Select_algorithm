// /* eslint-disable */
import "bootstrap";
import "./style.css";

var simbolo = ["♦", "♥", " ♠", "♣"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
var arrayOriginal = [];

//Dibujo la carta, agrego divs y clases

function dibujarCarta(simbolo, number) {
  let card = document.createElement("div");
  card.classList.add("card");

  let simbolosup = document.createElement("div");
  simbolosup.classList.add("simbolo");
  simbolosup.innerHTML = simbolo;

  let numero = document.createElement("div");
  numero.classList.add("number");
  if (number == 1) {
    number = "A";
  }
  if (number == 11) {
    number = "J";
  }
  if (number == 12) {
    number = "Q";
  }
  if (number == 13) {
    number = "K";
  }

  numero.innerHTML = number;

  let simboloinf = document.createElement("div");
  simboloinf.classList.add("simboloinf");
  simboloinf.innerHTML = simbolo;

  if (simbolo === "♦" || simbolo === "♥") {
    simbolosup.style.color = "red";
    simboloinf.style.color = "red";
  }
  //Agrego a elemento card
  card.appendChild(simbolosup);
  card.appendChild(numero);
  card.appendChild(simboloinf);

  return card;
}

//Botón para dibujar cartas según input

var draw = document.querySelector("#draw");
draw.addEventListener("click", function(e) {
  e.preventDefault();
  draw.disabled = true;

  var cantidadinput = document.querySelector("#input").value;
  var cartasrandom = document.querySelector("#cartasAleatorias");

  for (let i = 0; i < cantidadinput; i++) {
    let randomsimbolo = Math.floor(Math.random() * simbolo.length);
    let randomnumber = Math.floor(Math.random() * number.length);
    let retornarcarta = dibujarCarta(
      simbolo[randomsimbolo],
      number[randomnumber]
    );
    arrayOriginal[i] = [number[randomnumber], simbolo[randomsimbolo]];

    cartasrandom.appendChild(retornarcarta);
  }
  console.log("Array Original");
  console.log(arrayOriginal);
});

//Botón sort para ordenar por método

var sort = document.querySelector("#sort");
sort.addEventListener("click", function(e) {
  e.preventDefault();
  sort.disabled = true;

  let cartasOrdenadas = bubbleSort(arrayOriginal);
  let divOrdenadas = document.querySelector("#cartasOrdenadas");
  for (let i = 0; i < cartasOrdenadas.length; i++) {
    let cartas = dibujarCarta(cartasOrdenadas[i][1], cartasOrdenadas[i][0]);
    divOrdenadas.appendChild(cartas);
  }
});

//Método Sort
const bubbleSort = arr => {
  let wall = arr.length - 1; //we start the wall at the end of the array
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      //compare the adjacent positions, if the right one is bigger, we have to swap
      if (arr[index][0] > arr[index + 1][0]) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    wall--; //decrease the wall for optimization
  }
  return arr;
};

//Botón select para ordenar por método select

var select = document.querySelector("#select");
select.addEventListener("click", function(e) {
  e.preventDefault();
  select.disabled = true;

  let metodoSelect = selectSort(arrayOriginal);
  let divSelect = document.querySelector("#metodoSelect");
  for (let i = 0; i < metodoSelect.length; i++) {
    let cartas = dibujarCarta(metodoSelect[i][1], metodoSelect[i][0]);
    divSelect.appendChild(cartas);
  }
});

//Método Select

const selectSort = arr => {
  let min = 0;
  /* Ordenamos los numeros */
  while (min < arr.length) {
    for (let i = min + 1; i < arr.length; i++) {
      if (arr[min[0]] > arr[i[0]]) {
        let aux = arr[min];
        arr[min] = arr[i];
        arr[i] = aux;
      }
    }
    min++;
  }
  return arr;
};
