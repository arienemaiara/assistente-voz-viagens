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

    if (resultado === 'clima') {
      window.location.href = 'climapage.html';
    }
    else if (resultado === 'calculadora') {
      window.location.href = 'conversaopage.html';
    }
    else if (resultado === 'mapa') {
      window.location.href = 'mapapage.html';
    }
    else if (resultado === 'documento') {
      window.location.href = 'docpage.html';
    }
    else if (resultado === 'posição') {
      window.location.href = 'perdidopage.html';
    }
    else if (resultado === 'notícias') {
      window.location.href = 'news.html';
    }
    else if (resultado === 'aeroporto') {
      window.location.href = "aeroportos.html"
    }
    else if (resultado === 'trajeto') {
      window.location.href = 'rotaspage.html';
    }
    else if (resultado === 'início') {
      window.location.href = 'index.html';
    }
  }
};
