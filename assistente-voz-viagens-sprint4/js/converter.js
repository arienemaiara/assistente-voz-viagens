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
      var text = event.results[i][0].transcript.trim();

    if (text.includes('converter')||text.includes('Converter')) {
        var result = 0;
        var inicio3 = text.indexOf('p')
        var endMoney = inicio3-1;
        var money = text.slice(13,endMoney);
        var currency = '';
        var symbol = '';
        var response = ''

        if(text.indexOf('d') > 0){
            currency = 'dólar';
            symbol = '$';
        } else if(text.indexOf('u') > 0){
            currency = 'euro';
            symbol = '€'
        }

        if(currency == 'dólar'){
            result = money*0.2;
        }else if (currency=='euro'){
            result = money*0.18;
          }

        response = "R$"+money + " equivale a " + symbol + result.toFixed(2);
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


