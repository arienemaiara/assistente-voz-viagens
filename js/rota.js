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
      janela.close();
    }
    else if (resultado.includes('voltar')){
      window.location.href = 'homepage.html';
      janela.close();
    }
    else if (resultado.includes('voz reiniciar')) {
      recognition.start();
    }
    else {
      var comando = resultado.replace(' para ', '|');
      var listaCidades = comando.split('|');
      var cidade1 = listaCidades[0].trim();
      var cidade2 = listaCidades[1].trim();

      var janela = window.open('http://www.google.com.br/maps/dir/'+ cidade1 + '/' + cidade2);
    }

  }
}
