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

    var resultado = event.results[i][0].transcript.trim();

    if (resultado === 'documento') {
      var site = window.open("https://www.anac.gov.br/assuntos/passageiros/documentos-para-embarque", "flag");
    }
    else if (resultado === 'fechar') {
      var site = window.open("https://www.anac.gov.br/assuntos/passageiros/documentos-para-embarque", "flag");
      site.close();
    }
    else if (resultado === 'voltar'){
      var site = window.open("https://www.anac.gov.br/assuntos/passageiros/documentos-para-embarque", "flag");
      window.location.href = 'homepage.html';
      site.close();
    }
  }
};
