var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = 'pt-BR';
recognition.interimResults = false;
recognition.maxAlternatives = 1;


window.onload = function() {
  recognition.start();
}

recognition.onresult = function(event) {

  for (let i = event.resultIndex; i < event.results.length; i++) {

    var resultado = event.results[i][0].transcript.trim();


    if (resultado.includes('fechar')) {
      var janela = window.open('', "janela");
      janela.close();
    }
    else if (resultado.includes('voltar')){
      var janela = window.open('', "janela");
      window.location.href = 'homepage.html';
      janela.close();
    }
    else if (resultado.includes(' para ')) {
      var comando = resultado.replace(' para ', '|');
      var listaCidades = comando.split('|');
      var cidade1 = listaCidades[0].trim();
      var cidade2 = listaCidades[1].trim();

      janela = window.open(('http://www.google.com.br/maps/dir/'+ cidade1 + '/' + cidade2), "janela");
    }
  }
}
