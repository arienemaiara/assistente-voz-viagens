var recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = 'pt-BR';
recognition.interimResults = false;
recognition.maxAlternatives = 1;


window.onload = function() {
  recognition.start();
}

recognition.onresult = function(event) {

  for (let i = event.resultIndex; i < event.results.length; i++) {
    // guarda o resultado da função na variável
    var resultado = event.results[i][0].transcript.trim();


    if (resultado.includes('fechar')) {
      var janela = window.open('', "janela"); // "janela" é uma flag utilizada para que
      janela.close();                   // a função close() reconheça a janela aberta
    }
    else if (resultado.includes('voltar')){
      var janela = window.open('', "janela");
      window.location.href = 'homepage.html';
      janela.close();
    }
    else if (resultado.includes(' para ')) {
      var comando = resultado.replace(' para ', '|'); // simples split e trim feito
      var listaCidades = comando.split('|');    // para separa o resultado entre
      var cidade1 = listaCidades[0].trim();   // cidade1 e cidade2
      var cidade2 = listaCidades[1].trim();

      janela = window.open(('http://www.google.com.br/maps/dir/'+ cidade1 + '/' + cidade2), "janela");
    }
  }
}
