function getUserPosition() { // Função para descobrir a localização do usuário
    let url;
    navigator.geolocation.getCurrentPosition((pos) => {
      let lat = pos.coords.latitude; // Latitude informada pelo navegador sendo armazenada em uma variavel
      let long = pos.coords.longitude; // Longitude informada pelo navegador sendo armazenada em uma variavel
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=0ed1849b155148f92803761f3cb5b7ce`; // Inserindo a URL do site e adicionando a chave da API gerada no site
      fetchApi(url);
    });
  }

  function fetchApi(url) { // Salvando os retornos da API
    let city = document.querySelector('.city'); // Salvando a localização do usuario informado pela API (cidade)
    let temp = document.querySelector('span'); // Salvando a temperarura da cidade informada pela API
    fetch(url) // A função solicita os dados para a URL inserida a cima (requisição HTTP)
    .then((data) => {
      return data.json(); // Retorno dos dados convertidos em JSON
    })
    .then((data) => { 
      let tempInCelsius = ((5/9) * (data.main.temp-32)).toFixed(1); // Convertendo a temperatura fornecida pela API para Celsius
      city.innerText = `Hoje a temperatura em ${data.name} é:`; // Retornando para o HTML a cidade e a temperatura convertida
      temp.innerText = tempInCelsius;
    })
    .catch((err) => { // Tratamento de erros
      city.innerText = `Impossível executar a função. Verifique a sua conexão.`;
      temp.innerText = `-`;
    })
  }

  getUserPosition();
