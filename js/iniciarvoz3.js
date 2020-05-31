(() => {
    const startBtn = document.querySelector('#start3');
    function start() {
      const recognition = new webkitSpeechRecognition();
      recognition.interimResults = false;
      recognition.lang = "pt-BR";
      recognition.continuous = false;
      recognition.start();
      recognition.onresult = function(event) {
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i][0].transcript.trim()=== 'clima'){
            window.open('busca-clima.html');
      recognition.stop();
          }
          }
        }
      };
    startBtn.addEventListener('click', () => start());
  })();
