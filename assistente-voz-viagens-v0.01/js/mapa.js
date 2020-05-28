(() => {
        const startBtn = document.querySelector('#start');
        const output = document.querySelector('#output');
        function start() {
          const recognition = new webkitSpeechRecognition();
          recognition.interimResults = true;
          recognition.lang = "pt-BR";
          recognition.continuous = true;
          recognition.start();
          // Quando você fala no microfone:
          recognition.onresult = function(event) {
            for (let i = event.resultIndex; i < event.results.length; i++) {
              if (event.results[i].isFinal) {
                // Aqui você transforma em string o que você falou
                const content = event.results[i][0].transcript.trim();
                output.textContent = content;
                // Aqui transformo a string em var e coloco no link
                var city = content;
                window.open('http://www.google.com.br/maps/place/'+ city);
              }
            }
          };
        };
        startBtn.addEventListener('click', () => start());
      })();
