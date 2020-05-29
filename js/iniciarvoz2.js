(() => {
    const startBtn = document.querySelector('#start2');
    function start() {
      const recognition = new webkitSpeechRecognition();
      recognition.interimResults = true;
      recognition.lang = "pt-BR";
      recognition.continuous = true;
      recognition.start();
      recognition.onresult = function(event) {
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i][0].transcript.trim()=== 'calculadora'){
            window.location.href = 'pagina-conversao-moedas.html';
          }
          }
        }
      };
    startBtn.addEventListener('click', () => start());
  })();
