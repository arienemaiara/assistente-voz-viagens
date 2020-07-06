
function api_filmes() {

  $.getJSON("https://r4u.herokuapp.com/getFilme/2", function (dados_filmes) {
    console.log(dados_filmes);
    filme = dados_filmes.filme

  })
}
