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
    var fala = event.results[i][0].transcript.trim();
    var about = fala;
    console.log(about);

        if (fala != 'notícia 1' && fala != 'notícia 2'  && fala != 'notícia 3' && fala != 'notícia 4' && fala != 'notícia 5' && fala != 'notícia 6'
        && fala != 'Notícia 1' && fala != 'Notícia 2'  && fala != 'Notícia 3' && fala != 'Notícia 4' && fala != 'Notícia 5' && fala != 'Notícia 6' 
        && fala != 'notícias 6' && fala != 'Notícias 6' && fala != 'notícias 5' && fala != 'Notícias 5'
        && fala != 'notícia um' && fala != 'notícia dois'  && fala != 'notícia três' && fala != 'notícia quatro' && fala != 'notícia cinco' && fala != 'notícia seis'
        && fala != 'Notícia um' && fala != 'Notícia dois'  && fala != 'Notícia três' && fala != 'Notícia quatro' && fala != 'Notícia cinco' && fala != 'Notícia seis' 
        && fala != 'notícias seis' && fala != 'Notícias seis' && fala != 'notícias cinco' && fala != 'Notícias cinco'
        && fala != 'fechar' && fala != 'voltar' && fala != 'Fechar' && fala != 'Voltar'){
              
          //Pegar dados json e mostrar no console e html
          fetch(`https://newsapi.org/v2/everything?q=${about}&pageSize=6&language=pt&apiKey=4f756cb6c2ad4ec98f5a12a94a083369`)
          .then(response =>{
            return response.json()
          })
          .then((data)=>{
            console.log(data)
            data.articles.forEach(article =>{
              div = document.createElement('div');
              a = document.createElement('a');
              p = document.createElement('p')
              img = document.createElement('img');
              img.setAttribute('src', article.urlToImage);
              div.setAttribute('class', 'div-float');
              a.setAttribute('href', article.url);
              a.setAttribute('target', '_blanck');
              a.textContent = article.title;
              p.textContent = article.source.name;
              div.appendChild(img);
              div.appendChild(a);
              div.appendChild(p)
              
              
              newsList.appendChild(div);
              teste1 = document.getElementsByTagName('a')[0];
              teste2 = document.getElementsByTagName('a')[1];
              teste3 = document.getElementsByTagName('a')[2];
              teste4 = document.getElementsByTagName('a')[3];
              teste5 = document.getElementsByTagName('a')[4];
              teste6 = document.getElementsByTagName('a')[5];
              
            });
          });
        }

        else if (about.includes('notícia 1')||about.includes('Notícia 1') || about.includes('notícia um')||about.includes('Notícia um')){
          console.log('você conseguiu', teste1);
          janela = window.open((teste1), "janela");
        }

        else if (about.includes('notícia 2')||about.includes('Notícia 2') || about.includes('notícia dois')||about.includes('Notícia dois')){
          console.log('você conseguiu', teste2);
          janela = window.open((teste2), "janela");
        }

        else if (about.includes('notícia 3')||about.includes('Notícia 3')|| about.includes('notícia três')||about.includes('Notícia três')){
          console.log('você conseguiu', teste3);
          janela = window.open((teste3), "janela");
        }

        else if (about.includes('notícia 4')||about.includes('Notícia 4') || about.includes('notícia quatro')||about.includes('Notícia quatro')){
          console.log('você conseguiu', teste4);
          janela = window.open((teste4), "janela");
        }

        else if (about.includes('notícia 5')||about.includes('Notícia 5') || about.includes('notícia cinco')||about.includes('Notícia cinco') || about.includes('notícias 5')||about.includes('Notícias 5') || about.includes('notícias cinco')||about.includes('Notícias cinco')){
          console.log('você conseguiu', teste5);
          janela = window.open((teste5), "janela");
        }

        else if (about.includes('notícia 6')||about.includes('Notícia 6')||about.includes('Notícias 6')||about.includes('notícias 6') || about.includes('notícia seis')||about.includes('Notícia seis')||about.includes('Notícias seis')||about.includes('notícias seis')){
          console.log('você conseguiu', teste6);
          janela = window.open((teste6), "janela");
        }

        else if (about.includes('fechar')) {
          janela.close();
        }

        else if (fala=== 'voltar'){
          window.location.href = 'homepage.html';
        }
    
  }

  

  //var janela1 = window.open((teste1), "janela1");
  //var janela2 = window.open((teste2), "janela2");
  //var janela3 = window.open((teste3), "janela3");
  //var janela4 = window.open((teste4), "janela4");
  //var janela5 = window.open((teste5), "janela5");
  //var janela6 = window.open((teste6), "janela6");
   

    /*if (event.results[i][0].transcript.trim()=== 'Notícia 1'){
      janela1 = window.open((teste1), "janela1");
    }
    else if (event.results[i][0].transcript.trim()=== 'notícia 2'){
      janela2 = window.open((teste2), "janela2");
    }
    else if (event.results[i][0].transcript.trim()=== 'Notícia 3'){
      janela3 = window.open((teste3), "janela3");
    }
    else if (event.results[i][0].transcript.trim()=== 'Notícia 4'){
      janela4 = window.open((teste4), "janela4");
    }
    else if (event.results[i][0].transcript.trim()=== 'Notícia 5'){
      janela5 = window.open((teste5), "janela5");
    }
    else if (event.results[i][0].transcript.trim()=== 'Notícia 6' || event.results[i][0].transcript.trim()=== 'Notícias 6' 
          || event.results[i][0].transcript.trim()=== 'notícia 6' || event.results[i][0].transcript.trim()=== 'notícias 6'  ){
      janela6 = window.open((teste6), "janela6");
    }
    else if (event.results[i][0].transcript.trim()=== 'fechar'){
      for(i=0; i<=6; i++)
        var jan = ('janela') + i;
        print(jan)
        jan.close();
    }*/
      
};