
//chamando a api com os valores das moedas em forma de função
$.getJSON("http://data.fixer.io/api/latest?access_key=9d3b2fafe395e806ec62c3010e61ca37", function(dados){
  //para verificar se deu certo e referência. Console da página
  console.log(dados);

  //placeholder - mostra os valores do euro e dólar
  document.write("Real: 1.000" + "<br>");

  var dolar = dados.rates.BRL / dados.rates.USD
  //deixei pra mostrar até o terceiro digito depois da vírgula
  document.write("Dólar Americano: " + dolar.toString(10).substring(0, 5) + "<br>");

  var euro = dados.rates.BRL
  document.write("Euro: " + euro.toString(10).substring(0, 5) + "<br>");

});
