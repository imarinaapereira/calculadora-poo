class Calculadora {

  static soma(operador, parametro) {
    return Number(operador) + Number(parametro)
  }

  static subtracao(operador, parametro) {
    return Number(operador) - Number(parametro)
  }

  static divisao(operador, parametro) {
    return Number(operador) / Number(parametro)
  }

  static multiplicacao(operador, parametro) {
    return Number(operador) * Number(parametro)
  }
}


function instanciarHtml() {
  const tipoOperacaoHtml = document.querySelector('.container #operadores')
  const executarHtml = document.querySelector('.container #executar')
  const  operador = document.querySelector('.container .informacoes .informacao #operador');
  const parametro = document.querySelector('.container .informacoes .informacao #parametro');
  
  return { tipoOperacaoHtml, executarHtml ,operador,parametro}
}

const documento = instanciarHtml()

const variaveis = {
  tipoOperacao: '',
  operador: '',
  parametro: '',
  resultado: ''
}

documento.tipoOperacaoHtml.addEventListener('change', (event) => {
  const { value } = event.target

  switch (value) {
    case 'somar': {
      variaveis.tipoOperacao = value
      break
    }
    case 'subtrair': {
      variaveis.tipoOperacao = value
      break
    }

    case 'dividir': {
      variaveis.tipoOperacao=value
      break
    }

    case 'multiplicar': {
      variaveis.tipoOperacao=value
      break
    }
  }
})



documento.executarHtml.addEventListener('click', () => {
  switch (variaveis.tipoOperacao) {
    case 'somar': {
      console.log(`[Calculadora] -> `, Calculadora.soma(operador.value, parametro.value))
      
      
      break
    }
    case 'subtrair': {
      console.log(`[Calculadora] -> `, Calculadora.subtracao(operador.value, parametro.value))
      break
    }
    case 'dividir': {
      console.log(`[Calculadora] -> `, Calculadora.divisao(operador.value, parametro.value))
      break
    }
    case 'multiplicar': {
      console.log(`[Calculadora] -> `, Calculadora.multiplicacao(operador.value, parametro.value))
      break
    }
  }
})

// displayHtml
console.log(operador.value)

  const reiniciar = document.querySelector('.container #apagar')
  reiniciar.addEventListener('click',()=>{
    operador.value=''
    parametro.value=''
  
  })
  const resultadoHtml = document.querySelector('.resultado .valor')

  documento.executarHtml.addEventListener('click', () => {
    switch (variaveis.tipoOperacao) {
      case 'somar': {
        const resultado = Calculadora.soma(operador.value, parametro.value)
        resultadoHtml.textContent = resultado
        break
      }
      case 'subtrair': {
        const resultado = Calculadora.subtracao(operador.value, parametro.value)
        resultadoHtml.textContent = resultado
        break
      }
      case 'dividir': {
        const resultado = Calculadora.divisao(operador.value, parametro.value)
        resultadoHtml.textContent = resultado
        break
      }
      case 'multiplicar': {
        const resultado = Calculadora.multiplicacao(operador.value, parametro.value)
        resultadoHtml.textContent = resultado
        break
      }
    }
  })
  