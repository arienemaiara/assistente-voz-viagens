
//vareaveis para serem usadas no arquivo html
var real_dolar
var real_euro
var dolar_real
var dolar_euro
var euro_real
var euro_dolar

//chamando a api com os valores das moedas em forma de função
$.getJSON("http://data.fixer.io/api/latest?access_key=9d3b2fafe395e806ec62c3010e61ca37", function(dados){
  //para verificar se deu certo e usar como referência. Console da página
  console.log(dados);

  real_dolar = (dados.rates.BRL / dados.rates.USD)
  real_euro = (dados.rates.BRL / dados.rates.EUR)
  dolar_real = (dados.rates.USD / dados.rates.BRL)
  dolar_euro = (dados.rates.USD / dados.rates.EUR)
  euro_real = dados.rates.BRL
  euro_dolar = dados.rates.USD

});
