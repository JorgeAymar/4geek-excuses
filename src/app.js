/* eslint-disable */

//write your code here
// Using javascript, create a function that generates and returns a random excuse with the following structure:

let who = ["El perro", "Mi abuela", "Mi tortuga", "Mi canario", "Mi gato"];
let what = ["se comió", "aplastó", "robó", "rompió", "quebró"];
let when = [
  "antes de clases",
  "justo cuando terminé",
  "mientras almorzaba",
  "mientras yo rezaba"
];

function Generator(quien, que, cuando) {
  numQuien = Math.floor(Math.random() * quien.length);
  numQue = Math.floor(Math.random() * que.length);
  numCuando = Math.floor(Math.random() * cuando.length);
  return (
    quien[numQuien] +
    " " +
    que[numQue] +
    " " +
    "mi tarea" +
    " " +
    cuando[numCuando]
  );
}

function Ejecutar() {
  const excusador = document.getElementById("excusa");
  let mensaje = Generator(who, what, when);
  /*console.log(mensaje); */
  excusador.innerHTML = "<h1>" + mensaje + "</h1>";
}

window.onload = Ejecutar();
