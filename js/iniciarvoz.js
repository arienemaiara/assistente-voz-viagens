(() => {
  const BotaoIniciar = document.querySelector('#iniciar');
  const saida = document.querySelector('#saida');
  function iniciar() {
    const recognition = new webkitSpeechRecognition();
    recognition.interimResults = true;
    recognition.lang = "pt-BR";
    recognition.continuous = true;
    recognition.start();
   
    recognition.onresult = function(event) {
      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
        var content = event.results[i][0].transcript.trim();

         if (content === 'iniciar' || content === 'abrir' || content === 'entrar'){
          window.location.href = 'homepage.html?=' + content; 
          saida.textContent = content;

         }else{
           alert('Desculpe, não entendi o que disse')
         }
        }
      }
    };
    };
  BotaoIniciar.addEventListener('click', () => iniciar());   
})();
 