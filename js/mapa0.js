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
    else if (resultado.includes('mapa ')) {
      var comando = resultado.replace('mapa ', '');

      janela = window.open(('http://www.google.com.br/maps/place/'+ comando), "janela");
    }
  }
};
