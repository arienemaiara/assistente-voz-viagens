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
    console.log(about);
    if (event.results[i].isFinal && event.results[i][0].transcript.trim()=== 'Argentina') {
        
        //Pegar dados json e mostrar no console e html
        fetch(`https://newsapi.org/v2/everything?q=${about}&language=pt&apiKey=4f756cb6c2ad4ec98f5a12a94a083369`)
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
            teste1 = document.getElementsByTagName('a')[0];
            teste2 = document.getElementsByTagName('a')[1];
            teste3 = document.getElementsByTagName('a')[2];
            teste4 = document.getElementsByTagName('a')[3];
            teste5 = document.getElementsByTagName('a')[4];
            
        });
     });
    }
    else if (event.results[i][0].transcript.trim()=== 'primeira'){
      window.open((teste1), "teste1");
      console.log(teste1)
    }
    else if (event.results[i][0].transcript.trim()=== 'segunda'){
      window.open((teste2), "teste2");
      console.log(teste2)
    }
    else if (event.results[i][0].transcript.trim()=== 'terceira'){
      window.open((teste3), "teste3");
      console.log(teste3)
    }
    else if (event.results[i][0].transcript.trim()=== 'quarta'){
      window.open((teste4), "teste4");
      console.log(teste4)
    }
    else if (event.results[i][0].transcript.trim()=== 'quinta'){
      window.open((teste5), "teste5");
      console.log(teste5)
    }
    else if (event.results[i][0].transcript.trim()=== 'voltar'){
      window.location.href = 'homepage.html';
    }
  }
};