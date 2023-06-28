let visor = document.querySelector(".calculadora__visor");
let calcular = document.querySelector(".calculadora__botao_cal");
let ac = document.querySelector(".calculadora__botao-AC");

let firstCLick = true
let valor1 = 0
let valor2 = null
let operacao = null

numeros()

function numeros() {
  for (let i = 0; i <= 9; i++) {
    let button = document.querySelector(`.calculadora__botao${i}`)
    button.addEventListener("click", () => {
      if(firstCLick === true) {
        visor.textContent = ""
        firstCLick = false
      }
      if(operacao === null) {
        valor1 = parseFloat(visor.textContent +=i)
      }
      if(operacao != null) {
        valor2 = parseFloat(visor.textContent +=i)
      }
    })
  }

  for (let op = 1; op <= 4; op++) {
    let operador = document.querySelector(`.botao__op${op}`)
    operador.addEventListener("click", () => {
      visor.textContent = ""
      operacao = op
    })
  }
}

calcular.addEventListener("click", () => {
  if(operacao === 1) {
    visor.textContent = valor1 + valor2
  } else if (operacao === 2) {
    visor.textContent = valor1 - valor2
  } else if (operacao === 3) {
    visor.textContent = valor1 * valor2
  } else if (operacao === 4) {
    visor.textContent = valor1 / valor2
  }
})

ac.addEventListener("click", () => {
  firstCLick = true
  valor1 = 0
  valor2 = null
  operacao = null
  visor.textContent = 0
})