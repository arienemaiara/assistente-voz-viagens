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
    //Resultado da fala em minúsculo 
    var about = fala.toLowerCase();
    //Nome das variáveis para abrir os links de notícias
    var num = ['link 1', 'link 2', 'link 3', 'link 4', 'link 5', 'link 6']
    var alpha = ['link um', 'link dois', 'link tres', 'link quatro', 'link cinco', 'link seis']
    //console.log(alpha[0]);
    //console.log(num);
    console.log(about);
    
    // Validação do comando de voz para gerar os links
    if (fala != num[0] && fala != num[1] && fala != num[2] && fala != num[3] && fala != num[4]
        && fala != num[5] && fala != alpha[0] && fala != alpha[1] && fala != alpha[2] 
        && fala != alpha[3] && fala != alpha[4] && fala != alpha[5] && fala != 'fechar' 
        && fala != 'voltar'){
      //Pegar dados json e mostrar no console e html
      fetch(`https://newsapi.org/v2/everything?q=${about}&pageSize=6&language=pt&apiKey=4f756cb6c2ad4ec98f5a12a94a083369`)
      .then(response =>{
        return response.json()
      })
      .then((data)=>{
        console.log(data)
        j = 1;
        data.articles.forEach(article =>{
          count = j++;
          div = document.createElement('div');
          a = document.createElement('a');
          p = document.createElement('p')
          img = document.createElement('img');
          c = document.createElement('p');
          img.setAttribute('src', article.urlToImage);
          div.setAttribute('class', 'div-float');
          a.setAttribute('href', article.url);
          a.setAttribute('target', '_blanck');
          c.setAttribute('class','contador');
          a.textContent = article.title;
          p.textContent = article.source.name;
          c.textContent = count;
          div.appendChild(img);
          div.appendChild(a);
          div.appendChild(p);
          div.appendChild(c);
          
          newsList.appendChild(div);
          teste0 = document.getElementsByTagName('a')[0];
          teste1 = document.getElementsByTagName('a')[1];
          teste2 = document.getElementsByTagName('a')[2];
          teste3 = document.getElementsByTagName('a')[3];
          teste4 = document.getElementsByTagName('a')[4];
          teste5 = document.getElementsByTagName('a')[5];
          
        });
      });
    }
   //Comando de voz para abrir links de notícias individuais
    else if (about.includes(num[0])|| about.includes(alpha[0])){
      console.log('você conseguiu', teste0);
      janela = window.open((teste0), "janela");
    }
    else if (about.includes(num[1])|| about.includes(alpha[1])){
      console.log('você conseguiu', teste1);
      janela = window.open((teste1), "janela");
    }
    else if (about.includes(num[2])|| about.includes(alpha[2])){
      console.log('você conseguiu', teste2);
      janela = window.open((teste2), "janela");
    }
    else if (about.includes(num[3])|| about.includes(alpha[3])){
      console.log('você conseguiu', teste3);
      janela = window.open((teste3), "janela");
    }
    else if (about.includes(num[4])|| about.includes(alpha[4])){
      console.log('você conseguiu', teste4);
      janela = window.open((teste4), "janela");
    }
    else if (about.includes(num[5])|| about.includes(alpha[5])){
      console.log('você conseguiu', teste5);
      janela = window.open((teste5), "janela");
    }
    else if (about.includes('fechar')) {
      janela.close();
    }
    else if (fala=== 'voltar'){
      window.location.href = 'homepage.html';
      janela.close();
    }  
}
};
//Segunda opção para trocar pelos comandos else if (AINDA EM TESTE)
/*switch (fala){
        case about.includes(num[0])||about.includes(alpha[0]):
            //console.log('você conseguiu', teste0);
            janela = window.open((teste0), "janela");
           break;
        case about.includes(num[1])||about.includes(alpha[1]):
            //console.log('você conseguiu', teste1);
            janela = window.open((teste1), "janela");
            break;
        case about.includes(num[2])||about.includes(alpha[2]):
            //console.log('você conseguiu', teste2);
            janela = window.open((teste2), "janela");
            break;
        case about.includes(num[3])||about.includes(alpha[3]):
            //console.log('você conseguiu', teste3);
            janela = window.open((teste3), "janela");
         break;
        case about.includes(num[4])||about.includes(alpha[4]):
            //console.log('você conseguiu', teste4);
            janela = window.open((teste4), "janela");
            break;
        case about.includes(num[5])||about.includes(alpha[5]):
            //console.log('você conseguiu', teste5);
            janela = window.open((teste5), "janela");
                break;            
        case about.includes('fechar'):
            janela.close();
            break;
        case fala=== 'voltar':
            window.location.href = 'homepage.html';
            break;
             
    }*/