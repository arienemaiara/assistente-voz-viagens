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

      var city = '';

    if (text.includes('Ir para')||text.includes('ir para')) {
      city = text.slice(8);
      window.open(('http://www.google.com.br/maps/place/'+ city));
      console.log(city);
    }
    else if (event.results[i][0].transcript.trim()=== 'Walker voltar'){
      window.location.href = 'tips.html';
    }
    else if (event.results[i][0].transcript.trim()=== 'voltar ao início'){
      window.location.href = 'index.html';
    }
  }
};
