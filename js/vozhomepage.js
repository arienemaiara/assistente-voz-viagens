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
    if (event.results[i][0].transcript.trim()=== 'clima'){
      window.location.href = 'climapage.html';
    }
    else if (event.results[i][0].transcript.trim()=== 'calculadora'){
      window.location.href = 'conversaopage.html';
    }
    else if (event.results[i][0].transcript.trim()=== 'mapa'){
      window.location.href = 'mapapage.html';
    }
    else if (event.results[i][0].transcript.trim()=== 'documento'){
      window.location.href = 'docpage.html';
    }
    else if (event.results[i][0].transcript.trim()=== 'posição'){
      window.location.href = 'perdidopage.html';
    }
    else if (event.results[i][0].transcript.trim()=== 'notícias'){
      window.location.href = 'news.html';
    }
    else if (event.results[i][0].transcript.trim()=== 'início'){
      window.location.href = 'index.html';
    }
  }
};
