var date = document.querySelectorAll(".date-insert");
var temperature = document.querySelectorAll(".temperature-insert");
var description = document.querySelectorAll(".description-insert");
var icon = document.querySelectorAll("img");


const dataJSON = "https://api.openweathermap.org/data/2.5/forecast?q=London&appid=33fb7454eb75c6a062a86f7f0ee2695a&units=metric";
fetch(dataJSON)
	.then(response => response.json())
	.then(pasteData)

function pasteData(dataJSON) {
	var dateArray = [];
	var tempArray = [];
	var descArray = [];
	var idArray = [];
	dataJSON.list.forEach(function(el) {
		var newDate = new Date(el.dt_txt);

		if (newDate.getHours() === 12) {
			dateArray.push(newDate.toUTCString().split(' ').slice(0,4).join(' '));
			tempArray.push(el.main.temp.toFixed(0));
			descArray.push(el.weather[0].main);
			idArray.push(el.weather[0].id);
		};

	});

	for (var i = 0; i < dateArray.length; i++) {
		date[i].innerHTML = dateArray[i];
		temperature[i].innerHTML = tempArray[i] + ' &#8451;';
		description[i].innerHTML = descArray[i];
		var idWeather = idArray[i];
		switch(true) {
			case idWeather >= 200 && idWeather <= 232:
				icon[i].setAttribute('src','images/thunderstorm.png');
				break;
			case idWeather >= 300 && idWeather <= 321:
				icon[i].setAttribute('src','images/drizzle.png');
				break;
			case idWeather >= 500 && idWeather <= 504:
				icon[i].setAttribute('src','images/light-rain.png');
				break;
			case idWeather >= 511 && idWeather <= 531:
				icon[i].setAttribute('src','images/rain.png');
				break;
			case idWeather >= 600 && idWeather <= 622:
				icon[i].setAttribute('src','images/snow.png');
				break;
			case idWeather >= 701 && idWeather <= 781:
				icon[i].setAttribute('src','images/mist.png');
				break;
			case idWeather === 800:
				icon[i].setAttribute('src','images/sun.png');
				break;
			case idWeather === 801:
				icon[i].setAttribute('src','images/few-clouds.png');
				break;
			case idWeather === 802:
				icon[i].setAttribute('src','images/cloud.png');
				break;
			case idWeather === 803 || idWeather === 804:
				icon[i].setAttribute('src','images/clouds.png');
				break;
			default:
				icon[i].setAttribute('src','images/alert-cloud.png');		
		};
	};			
}



