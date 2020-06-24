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

      var x = document.getElementById("demo");



      function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
        imap = window.open(('http://www.google.com.br/maps/place/'+ position.coords.latitude + position.coords.longitude));
      }

      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        }
        else {
          x.innerHTML = "Geolocation não é suportada por esse navegador.";
        }
      }


      if (event.results[i][0].transcript.trim()=== 'me encontre'){
        getLocation(x);
      }

      else if (event.results[i][0].transcript.trim()=== 'voltar'){
        window.location.href = 'homepage.html';
        imap.close();
      }
      else if (event.results[i][0].transcript.trim()=== 'fechar'){
        imap.close();
      }
  }
};
