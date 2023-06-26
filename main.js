let visor = document.querySelector(".calculadora__visor");
let calcular = document.querySelector(".calculadora__botao_cal");
let somar = document.querySelector(".calculadora__botao_somar");
let ac = document.querySelector(".calculadora__botao-AC")

for (let i = 0; i <= 9; i++) {
  let botao = document.querySelector(`.calculadora__botao${i}`);
  let valor = botao.addEventListener("click", function() {
    visor.textContent += i;
  })
  let vazio = ac.addEventListener("click", function(){
    visor.textContent = 0
  })
  let soma = somar.addEventListener("click", function(){
    let operacao = visor.textContent = valor + " +"
  })
}






