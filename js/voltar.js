// protótipo da função voltar, criada para agilizar o uso da assistente
var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = 'pt-BR';
recognition.interimResults = true;
recognition.maxAlternatives = 1;

//quando a página terminar de carregar a função é disparada
window.onload = function() {
  recognition.start();
}

//pega o resultado da recognition.start() e compara
recognition.onresult = function(event) {
  for (let i = event.resultIndex; i < event.results.length; i++) {
    if (event.results[i][0].transcript.trim()=== 'voltar'){
      window.location.href = 'homepage.html';
    }
  }
};
