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

    //isso vai garantir que tudo seja letra minúscula
    const texto = text.toLowerCase()
    console.log(texto)
    
    //identifica onde o valor termina
    var valor_fim = texto.indexOf("d")
    console.log(valor_fim)
    
    //nova string sem o valor
    var texto_sem_valor = texto.slice(valor_fim,)
    console.log(texto_sem_valor)
    
    //isola o valor
    var valor = texto.slice(0, valor_fim)
    console.log(valor)
    
    //pega a primeira letra da primeira moeda
    var moeda1 = texto[valor_fim + 3]
    console.log(moeda1)
    
    //variavel que irá identificara segunda moeda depois
    var moeda2 = texto_sem_valor.slice(-6)
    console.log(moeda2)
    var valor_convertido
    
    //verifica a primeira letra da moeda1
    if (moeda1 == "r") {
      
      //LAR é unico de dólar
      if (moeda2.includes("lar")) {
        
        //as vezes o voice identifica "1" como "um", pra garantir
        if (valor.includes("um")) {
          
          //real_dolar é a variável que está no moedas.js, é a conversao
          document.getElementById("resultado").innerHTML = "$ " + real_dolar.toFixed(2)
        }
        else {
          //para qualquer outro número que o comando de voz entender
          valor_convertido = real_dolar * valor
          document.getElementById("resultado").innerHTML = "$ " + valor_convertido.toFixed(2)
        }
      }
      //EU é exclusivo de euro
      else if (moeda2.includes("eu")) {
        if (valor.includes("um")) {
          document.getElementById("resultado").innerHTML = "€ " + real_euro.toFixed(2)
        }
        else {
          valor_convertido = real_euro * valor
          document.getElementById("resultado").innerHTML = "€ " + valor_convertido.toFixed(2)
        }
      }
      else {
        document.getElementById("resultado").innerHTML = "Desculpe, não te entendi."
      }
    }

    else if (moeda1 == ("d")) {
      //RE é exclusivo de real
      if (moeda2.includes("re")) {
        if (valor.includes("um")) {
          document.getElementById("resultado").innerHTML = "R$ " + dolar_real.toFixed(2)
        }
        else {
          valor_convertido = dolar_real * valor
          document.getElementById("resultado").innerHTML = "R$ " + valor_convertido.toFixed(2)
        }
      }
      else if (moeda2.includes("eu")) {
        if (valor.includes("um")) {
        document.getElementById("resultado").innerHTML = "€ " + dolar_euro.toFixed(2)
        }
        else {
          valor_convertido = dolar_euro * valor
          document.getElementById("resultado").innerHTML = "€ " + valor_convertido.toFixed(2)
        }
      }
      else {
        document.getElementById("resultado").innerHTML = "Desculpe, não te entendi."
      }
    }

    else if (moeda1 == ("e")) {
      if (moeda2.includes("re")) {
        if (valor.includes("um")) {
          document.getElementById("resultado").innerHTML = "R$ " + euro_real.toFixed(2)
        }
        else {
          valor_convertido = euro_real * valor
          document.getElementById("resultado").innerHTML = "R$ " + valor_convertido.toFixed(2)
        }
      }
      else if (moeda2.includes("lar")) {
        if (valor.includes("um")) {
          document.getElementById("resultado").innerHTML = "$ " + euro_dolar.toFixed(2)
        }
        else {
          valor_convertido = euro_dolar * valor
          document.getElementById("resultado").innerHTML = "$ " + valor_convertido.toFixed(2)
        }
      }
      else {
        document.getElementById("resultado").innerHTML = "Desculpe, não te entendi."
      }
    }

    else if (texto == "voltar") {
      window.location.href = 'homepage.html';
    }

    else {
      document.getElementById("resultado").innerHTML = "Desculpe, não te entendi."
    }
  }
};
