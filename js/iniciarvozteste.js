// configuração padrão da função de reconhecimento de voz
var recognition = new webkitSpeechRecognition(); // classe webkit
recognition.continuous = true; // delimitando os valores para os atributos
recognition.lang = 'pt-BR';     // dentro da classe
recognition.interimResults = true;
recognition.maxAlternatives = 1;

// quando a página terminar de carregar a função é disparada
window.onload = function() {
  recognition.start();
}

// pega o resultado da recognition.start() e compara
recognition.onresult = function(event) {
  // a função cria uma array com os resultados
  for (let i = event.resultIndex; i < event.results.length; i++) {
    if (event.results[i][0].transcript.trim()=== 'iniciar'){
      window.location.href = 'homepage.html';
    }
  }
};
