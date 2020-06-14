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
    const newsList = document.querySelector('.news-list');
    newsList.innerHTML = ''

  for (let i = event.resultIndex; i < event.results.length; i++) {
    let about = event.results[i][0].transcript.trim();
    if (event.results[i].isFinal && event.results[i][0].transcript.trim() != 'voltar' ) {
        
        //Pegar dados json e mostrar no console e html
        fetch(`https://newsapi.org/v2/everything?q=${about}&apiKey=4f756cb6c2ad4ec98f5a12a94a083369`)
        .then(response =>{
          return response.json()
        })
        .then((data)=>{
          console.log(data)
          data.articles.forEach(article =>{
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.setAttribute('href', article.url);
            a.setAttribute('target', '_blanck');
            a.textContent = article.title;
            li.appendChild(a);
            newsList.appendChild(li)
        });
     });
    }
    if (event.results[i][0].transcript.trim()=== 'voltar'){
      window.location.href = 'homepage.html';
    }
  }
};