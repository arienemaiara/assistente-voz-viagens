var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = 'pt-BR';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

//quando a página terminar de carregar a função é disparada
window.onload = function() {
  recognition.start();
}

recognition.onresult = function(event) {
  for (let i = event.resultIndex; i < event.results.length; i++) {

    var janela = window.open(('https://www.anac.gov.br/assuntos/passageiros/documentos-para-embarque'), "janela");

    if (event.results[i].isFinal && event.results[i][0].transcript.trim()=== 'documento') {
      janela;
    }

    else if (event.results[i].isFinal && event.results[i][0].transcript.trim()==='fechar') {
      janela.close();
    }
    else if (event.results[i].isFinal && event.results[i][0].transcript.trim()==='voltar'){
      window.location.href = 'homepage.html';
      janela.close();
    }
  }
};
