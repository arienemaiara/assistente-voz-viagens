
var estado

//colocado em função para poder ser executada em outro arquivo
function api_aeroportos(){

	//daqui até "$.ajax" veio pronto do site da api
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/BR/BRL/en-GB/?query=" + estado,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
			"x-rapidapi-key": "ddcf87fc70mshcfe365706babc7dp1bfffbjsnefd246949f22"
		}
	}

	$.ajax(settings).done(function (response) {
		console.log(response);
		var resposta = ""

		//FOR usado para acessar os resultados que a api retorna
		for (var i = 0; i < response.Places.length; i++) {
			var aeroportos = response.Places[i];
			resposta = resposta + aeroportos.PlaceName + "<br>"
		}

	document.getElementById("resultado").innerHTML = resposta
	});
}
