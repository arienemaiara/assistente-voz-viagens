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
    var text = (event.results[i][0].transcript.trim())

    //executa a função com a api de filmes para gerar um novo valor
    if (text.includes("filme")) {
      api_filmes()
      document.getElementById("resultado").innerHTML = filme
    }

    else if (text.includes("voltar")) {
      window.location.href = "homepage.html";
    }
  }
};
