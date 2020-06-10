var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = 'pt-BR';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

//quando a página terminar de carregar a função é disparada
window.onload = function() {
  recognition.start();
}

//pega o resultado da recognition.start() e compara
recognition.onresult = function(event) {
  for (let i = event.resultIndex; i < event.results.length; i++) {
    var text = (event.results[i][0].transcript.trim())
    //frase: VALOR de MOEDA1 para MOEDA2
    const texto = text.toLowerCase()
    console.log(texto)
    //identifica onde o valor termina
    var valor_fim = texto.indexOf("d")
    console.log(valor_fim)
    var texto_sem_valor = texto.slice(valor_fim,)
    console.log(texto_sem_valor)
    var valor = texto.slice(0, valor_fim)
    console.log(valor)
    //pega a primeira letra da primeira moeda
    var moeda1 = texto[valor_fim + 3]
    console.log(moeda1)
    //variavel que irá identificara segunda moeda depois
    var moeda2 = texto_sem_valor.slice(-6)
    console.log(moeda2)

    if (moeda1 == "r") {
      if (moeda2.includes("lar")) {
        //as vezes o voice identifica "1" como "um"
        if (valor.includes("um")) {
        alert ("$ " + real_dolar.toFixed(3))
        }
        else {
          var valor_convertido = real_dolar * valor
          alert("$ " + valor_convertido.toFixed(3))
        }
      }
      else if (moeda2.includes("eu")) {
        if (valor.includes("um")) {
        alert ("&euro; " + real_euro.toFixed(3))
        }
        else {
          var valor_convertido = real_euro * valor
          alert("&euro; " + valor_convertido.toFixed(3))
        }
      }
      else {
        alert ("Desculpe, tente novamente.")
      }
    }


    else if (moeda1 == ("d")) {
      if (moeda2.includes("re")) {
        if (valor.includes("um")) {
        alert ("R$ " + dolar_real.toFixed(3))
        }
        else {
          var valor_convertido = dolar_real * valor
          alert("R$ " + valor_convertido.toFixed(3))
        }
      }
      else if (moeda2.includes("eu")) {
        if (valor.includes("um")) {
        alert ("&euro; " + dolar_euro.toFixed(3))
        }
        else {
          var valor_convertido = dolar_euro * valor
          alert("&euro; " + valor_convertido.toFixed(3))
        }
      }
      else {
        alert ("Desculpe, tente novamente.")
      }
    }


    else if (moeda1 == ("e")) {
      if (moeda2.includes("re")) {
        if (valor.includes("um")) {
        alert ("R$ " + euro_real.toFixed(3))
        }
        else {
          var valor_convertido = euro_real * valor
          alert("R$ " + valor_convertido.toFixed(3))
        }
      }
      else if (moeda2.includes("lar")) {
        if (valor.includes("um")) {
        alert ("$ " + euro_dolar.toFixed(3))
        }
        else {
          var valor_convertido = euro_dolar * valor
          alert("$ " + valor_convertido.toFixed(3))
        }

      }
      else {
        alert ("Desculpe, tente novamente.")
      }

    }

  else if (texto == "voltar") {
    window.location.href = 'homepage.html';
  }

  else {
    alert ("Desculpe, tente novamente")
  }


  }
};
