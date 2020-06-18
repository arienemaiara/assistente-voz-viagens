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
    console.log("Esse é o text: "+text);

    var janela = window.open(('http://www.google.com.br/maps/place/'+ text), "janela");

    if (text.includes('fechar')) {
      janela.close();
    }
    else if (text.includes('voltar')){
      window.location.href = 'homepage.html';
      janela.close();
    }
    else {
      janela;
    }
  }
};
