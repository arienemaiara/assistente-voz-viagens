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
      var texto = event.results[i][0].transcript.trim();
      const text = texto.toLowerCase()
      console.log(text)

    if (text.includes('converter')||text.includes('Converter')) {
        var result = 0;
        var inicio3 = text.indexOf('p')
        console.log(inicio3)
        var endMoney = inicio3-1;
        console.log(endMoney)
        var money
        var currency
        var symbol = ''
        var response = ''

        if (text.includes("r$")) {
          currency = "R$"
          money = text.slice(13,endMoney);
          if(text.indexOf('d') > 0){
              symbol = '$';
              result = money*real_dolar;

          } else if(text.indexOf('u') > 0){
              symbol = '€'
              result = money*real_euro;
          }
        }

        else if (text.includes(" $")) {
          currency = "$"
          money = text.slice(11,endMoney);
          if (text.includes("rea")) {
            symbol = "R$"
            result = money*dolar_real;
          } else if (text.includes("euro")) {
            symbol = "€"
            result = money*dolar_euro;
          }
        }

        else if (text.indexOf("u") < inicio3) {
          currency = "€"
          money = text.slice(10, (endMoney -5))
          if (text.includes("real", endMoney)) {
            symbol = "R$"
            result = money*euro_real
          } else if (text.includes("dólar", endMoney)) {
            symbol = "$"
            result = money*euro_dolar
          }
        }



        response = currency + money + " equivale a " + symbol + result.toFixed(2);
        document.getElementById('resultconvert').innerHTML = response;
      }

    else if (event.results[i][0].transcript.trim()=== 'Walker voltar'){
      window.location.href = 'tips.html';
    }
    else if (event.results[i][0].transcript.trim()=== 'voltar ao início'){
      window.location.href = 'index.html';
    }

    else
    document.getElementById('resultconvert').innerHTML = "Não entendi!"

  }
};
