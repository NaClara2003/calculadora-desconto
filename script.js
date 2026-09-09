const brl = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

const form = document.getElementById("form");
const erro = document.getElementById("erro");
const resultado = document.getElementById("resultado");

function calcularValorFinal(preco, percentual) {
  return preco - (preco * percentual) / 100;
}

function calcularEconomia(preco, percentual) {
  return (preco * percentual) / 100;
}

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const preco = Number(document.getElementById("preco").value);
  const percentual = Number(document.getElementById("percentual").value);

  if (!preco || preco <= 0 || percentual < 0 || percentual > 100) {
    resultado.hidden = true;
    erro.hidden = false;
    erro.textContent = "Informe um preço maior que zero e um desconto entre 0 e 100.";
    return;
  }

  erro.hidden = true;
  document.getElementById("percentual-aplicado").textContent = `${percentual}%`;
  document.getElementById("preco-original").textContent = brl.format(preco);
  document.getElementById("valor-final").textContent = brl.format(
    calcularValorFinal(preco, percentual)
  );
  document.getElementById("economia").textContent = brl.format(
    calcularEconomia(preco, percentual)
  );
  resultado.hidden = false;
});