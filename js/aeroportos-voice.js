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
    var text = (event.results[i][0].transcript.trim())
    estado_raw = text
    console.log(text)
    //converte o texto para este tipo de codificação,
    //é necessário caso tenha algum caracter especial, como "ã, é"
    estado = encodeURIComponent(estado_raw)
    console.log(estado)
    //executa a função da api que está em outro arquivo
    api_aeroportos()

    if (text.includes("voltar")) {
      window.location.href = "homepage.html";
    }
  }
};
