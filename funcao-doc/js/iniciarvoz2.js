(() => {
    const startBtn = document.querySelector('.target');
    function start() {
      const recognition = new webkitSpeechRecognition();
      recognition.interimResults = true;
      recognition.lang = "pt-BR";
      recognition.continuous = true;
      recognition.start();
      recognition.onresult = function(event) {
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i][0].transcript.trim()=== 'calculadora'){
              window.open('pagina-conversao-moedas.html');
          }
          if (event.results[i][0].transcript.trim()=== 'clima'){
            window.open('busca-clima.html');
          }
        }
      };
    window.onload = ('load', () => start());
  }
  })();
