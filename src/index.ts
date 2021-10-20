let btn = document.getElementById("btn");
let numero: string = document.getElementById("numero");

btn.addEventListener("click", () => {
  let num: number = Number(numero.value);
  if (num > 20) {
    console.log("el numero", num, "es mayor a 20");
  } else {
    console.log("el numero", num, "es menor a 20");
  }
});
