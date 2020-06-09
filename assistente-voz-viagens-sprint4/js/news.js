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
      var tema = '';

    if (text.includes('Mostrar sobre')||text.includes('mostrar sobre')) {
      city = text.slice(14);
      window.location.href = 'noticias2.html';
    }
    else if (text.includes('Notícias sobre')||text.includes('notícias sobre')) {
      tema = text.slice(15);
      window.location.href = '';//link para o site de noticias sobre o tema
    }
    else if (event.results[i][0].transcript.trim()=== 'Walker voltar'){
      window.location.href = 'tips.html';
    }
    else if (event.results[i][0].transcript.trim()=== 'voltar ao início'){
      window.location.href = 'index.html';
    }
    
  }
};