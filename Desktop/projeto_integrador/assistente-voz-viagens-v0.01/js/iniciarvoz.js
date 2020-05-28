(() => {
    const startBtn = document.querySelector('#start');
    const output = document.querySelector('#output');
    function start() {
      const recognition = new webkitSpeechRecognition();
      recognition.interimResults = true;
      recognition.lang = "pt-BR";
      recognition.continuous = true;
      recognition.start();
      recognition.onresult = function(event) {
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i][0].transcript.trim()=== 'iniciar'){
            window.location.href = 'homepage.html';
          }
          }
        }
      };
    startBtn.addEventListener('click', () => start());
  })();
