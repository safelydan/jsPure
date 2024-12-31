const calcular = document.getElementById("calcular");

async function imc() {
  const nome = document.getElementById("nome");
  const altura = document.getElementById("altura");
  const peso = document.getElementById("peso");
  const resultado = document.getElementById("resultado");

  if (!nome || !altura || !peso || !resultado) {
    console.log("todos os campos sao necessarios");
  }

  const imcResultado = peso.value / (altura.value * altura.value);
  console.log(imcResultado)

  resultado.innerHTML = `o seu imc é de ${imcResultado.toFixed(2)}`
}

async function showOn(resultd) {

}

calcular.addEventListener("click", imc);
