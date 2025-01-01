const calcular = document.getElementById("calcular");

async function imc() {
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;
  const resultado = document.getElementById("resultado");
  const diagnostico = document.getElementById("diagnostico");

  if (!nome || !altura || !peso) {
    resultado.innerHTML = "insira os valores no formulario";
    return;
  }

  console.log(nome);
  const alturaNum = parseFloat(altura);
  const pesoNum = parseFloat(peso);

  const imcResultado = pesoNum / (alturaNum * alturaNum);
  console.log(imcResultado);

  resultado.innerHTML = `${nome}, o seu imc é de ${imcResultado.toFixed(2)}`;

  if (imcResultado < 18.5) {
    diagnostico.innerHTML = `${nome}, você está abaixo do peso.`;
  } else if (imcResultado >= 18.5 && imcResultado < 24.9) {
    diagnostico.innerHTML = `${nome}, você está com peso normal.`;
  } else if (imcResultado >= 25 && imcResultado < 29.9) {
    diagnostico.innerHTML = `${nome}, você está com sobrepeso.`;
  } else if (imcResultado >= 30 && imcResultado < 34.9) {
    diagnostico.innerHTML = `${nome}, você está com obesidade grau 1.`;
  } else if (imcResultado >= 35 && imcResultado < 39.9) {
    diagnostico.innerHTML = `${nome}, você está com obesidade grau 2.`;
  } else {
    diagnostico.innerHTML = `${nome}, você está com obesidade grau 3.`;
  }
}

calcular.addEventListener("click", imc);
