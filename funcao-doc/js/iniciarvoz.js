(() => {
    const startBtn = document.querySelector('#start');
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



//vou deixar esses códigos aqui caso a gente precise mais tarde
