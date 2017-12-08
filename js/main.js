var date = document.querySelectorAll(".date-insert");
var temperature = document.querySelectorAll(".temperature-insert");
var description = document.querySelectorAll(".description-insert");


const dataJSON = "http://api.openweathermap.org/data/2.5/forecast?q=London&appid=33fb7454eb75c6a062a86f7f0ee2695a&units=metric";
fetch(dataJSON)
	.then(response => response.json())
	.then(pasteData)

function pasteData(dataJSON) {
	var dateArray = [];
	var tempArray = [];
	var descArray = [];
	dataJSON.list.forEach(function(el) {
		var newDate = new Date(el.dt_txt);
		if (newDate.getHours() === 12) {
			dateArray.push(el.dt_txt);
			tempArray.push(el.main.temp.toFixed(0));
			descArray.push(el.weather[0].main);
		};
	});
	date.forEach(function() {
		for (var i = 0; i < dateArray.length; i++) {
			date[i].innerHTML = dateArray[i];
			temperature[i].innerHTML = tempArray[i] + ' &#8451;';
			description[i].innerHTML = descArray[i];
		};
	});
}


