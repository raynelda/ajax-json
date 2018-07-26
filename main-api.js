
var submitBtn = document.getElementById("submit");
var api = 'http://api.openweathermap.org/data/2.5/weather?q='
var userCity = document.getElementById("city");
var apiKey = '&APPID=347ff0520bce6b722a5d57952d744a4e'
var units = '&units=imperial';


submitBtn.addEventListener('click', function() {
	
	var ourWeather = new XMLHttpRequest();
	
	var url = api + userCity.value + apiKey + units;
	ourWeather.open('GET', url);
	ourWeather.onload = function() {
		var weatherData = JSON.parse(ourWeather.responseText);
		showMe(weatherData);
	};
	ourWeather.send();
	
});

function showMe(data) {		
		document.getElementById("container").style.color = "magenta";
		document.getElementById("container").style.fontSize = "xx-large";
		var container = document.getElementById("container");
		container.innerHTML = data.main.temp + ' &#8457 in ' + userCity.value;	
	}
	
	console.log(document.querySelector(".circleHolder:hover .circle"));