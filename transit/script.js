
var xhr;

function init() {

	xhr = new XMLHttpRequest();
	xhr.open("get", "http://mbtamap.herokuapp.com/mapper/rodeo.json", true);
	
	xhr.onreadystatechange = dataReady;
	xhr.send(null);


}

function dataReady() {
	if (xhr.readyState == 4 && xhr.status == 200) {
		scheduleData = JSON.parse(xhr.responseText);
		console.log(scheduleData);
		scheduleDom = document.getElementById("schedule");
		scheduleDom.innerHTML = scheduleData["line"];
	}
	else if (xhr.readyState == 4 && xhr.status == 500) {
		scheduleDom = document.getElementById("schedule");
		scheduleDom.innerHTML = '<p>fail</p>'
	}
}