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
    if (event.results[i][0].transcript.trim()=== 'Walker clima'){
      window.location.href = 'clima.html';
    }
    else if (event.results[i][0].transcript.trim()=== 'Walker conversão'){
      window.location.href = 'conversao.html';
    }
    else if (event.results[i][0].transcript.trim()=== 'Walker mapa'){
      window.location.href = 'mapa.html';
    }
    else if (event.results[i][0].transcript.trim()=== 'Walker notícias'){
      window.location.href = 'noticias.html';
    }
    else if (event.results[i][0].transcript.trim()=== 'Walker documentação'){
      window.location.href = 'documentacao.html';
    }
    else if (event.results[i][0].transcript.trim()=== 'Walker voltar'){
      window.location.href = 'tips.html';
    }
    else if (event.results[i][0].transcript.trim()=== 'voltar ao início'){
      window.location.href = 'index.html';
    }
  }
};
