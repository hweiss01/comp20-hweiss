
var xhr;

function init() {

	latlng = new google.maps.LatLng(-34.397, 150.644);
	var mapOptions = { center : latlng};
	var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
	
	xhr = new XMLHttpRequest();
	xhr.open("get", "http://mbtamap.herokuapp.com/mapper/rodeo.json", true);
	
	lines = new Object();
	lines["blue"] = ['{"name":"Airport", "latitude":42.374262, "longitude":-71.030395}', '{"name":"Aquarium", "latitude":42.359784, "longitude":-71.051652}', '{"name":"Beachmont", "latitude":42.39754234, "longitude":-70.99231944}','{"name":"Beachmont", "latitude":42.39754234, "longitude":-70.99231944}','{"name":"Bowdoin", "latitude":42.361365, "longitude":-71.062037}','{"name":"Government Center", "latitude":42.359705, "longitude":-71.05921499999999}','{"name":"Maverick", "latitude":42.36911856, "longitude":-71.03952958000001}','{"name":"Orient Heights", "latitude":42.386867, "longitude":-71.00473599999999}','{"name":"Revere Beach", "latitude":42.40784254, "longitude":-70.99253321}', '{"name":"State Street", "latitude":42.358978, "longitude":-71.057598}', '{"name":"Suffolk Downs", "latitude":42.39050067, "longitude":-70.99712259}', '{"name":"Wonderland", "latitude":42.41342, "longitude":-70.991648}', '{"name":"Wood Island", "latitude":42.3796403, "longitude":-71.02286539000001}'];
    lines["orange"] = ['{"name":"Back Bay", "latitude":42.34735, "longitude":-71.075727}', '{"name":"Chinatown", "latitude":42.352547, "longitude":-71.062752}', '{"name":"Community College", "latitude":42.373622, "longitude":-71.06953300000001}','{"name":"Downtown Crossing", "latitude":42.355518, "longitude":-71.060225}','{"name":"Forest Hills", "latitude":42.300523, "longitude":-71.113686}','{"name":"Green Street", "latitude":42.310525, "longitude":-71.10741400000001}','{"name":"Haymarket", "latitude":42.363021, "longitude":-71.05829}','{"name":"Jackson Square", "latitude":42.323132, "longitude":-71.099592}','{"name":"Malden Center", "latitude":42.426632, "longitude":-71.07411}', '{"name":"Mass Ave", "latitude":42.341512, "longitude":-71.083423}', '{"name":"North Station", "latitude":42.365577, "longitude":-71.06129}', '{"name":"Oak Grove", "latitude":42.43668, "longitude":-71.07109699999999}', '{"name":"Roxbury Crossing", "latitude":42.331397, "longitude":-71.095451}','{"name":"Ruggles", "latitude":42.336377, "longitude":-71.088961}', '{"name":"State Street", "latitude":42.358978, "longitude":-71.057598}', '{"name":"Stony Brook", "latitude":42.317062, "longitude":-71.104248}', '{"name":"Sullivan", "latitude":42.383975, "longitude":-71.076994}', '{"name":"Tufts Medical", "latitude":42.349662, "longitude":-71.063917}', '{"name":"Wellington", "latitude":41.40237, "longitude":-71.077082}'];
	lines["red"] = ['{"name":"Airport", "latitude":42.374262, "longitude":-71.030395}', '{"name":"Aquarium", "latitude":42.359784, "longitude":-71.051652}', '{"name":"Beachmont", "latitude":42.39754234, "longitude":-70.99231944}','{"name":"Beachmont", "latitude":42.39754234, "longitude":-70.99231944}','{"name":"Bowdoin", "latitude":42.361365, "longitude":-71.062037}','{"name":"Government Center", "latitude":42.359705, "longitude":-71.05921499999999}','{"name":"Maverick", "latitude":42.36911856, "longitude":-71.03952958000001}','{"name":"Orient Heights", "latitude":42.386867, "longitude":-71.00473599999999}','{"name":"Revere Beach", "latitude":42.40784254, "longitude":-70.99253321}', '{"name":"State Street", "latitude":42.358978, "longitude":-71.057598}', '{"name":"Suffolk Downs", "latitude":42.39050067, "longitude":-70.99712259}', '{"name":"Wonderland", "latitude":42.41342, "longitude":-70.991648}', '{"name":"Wood Island", "latitude":42.3796403, "longitude":-71.02286539000001}'];								   
									  
									  
								      
									  
									  
									  
								      
								      
								      
									  								      

									//  "name":"Government", "Longitude":"42.374262", "Latitude":"-71.03095"},
									 // "name":"Maverick", "Longitude":"42.374262", "Latitude":"-71.03095"},
									  //"name":"Orient Heights", "Longitude":"42.374262", "Latitude":"-71.03095"},
								      //"name":"Revere Beach", "Longitude":"42.374262", "Latitude":"-71.03095"},
								      //"name":"State Street", "Longitude":"42.374262", "Latitude":"-71.03095"},
	
	//parsed = JSON.parse(str);
	//parsing(parsed);

	

	xhr.onreadystatechange = dataReady;
	xhr.send(null);


}

//function parsing(parsed){
//	console.log(parsed["line"]);
	//parsed2 = JSON.parse(parsed["Location"]);

//		parsed2 = JSON.parse(parsed["Location"][0]);
//		console.log(parsed2["name"]);
//}

function dataReady() {
	if (xhr.readyState == 4 && xhr.status == 200) {
		scheduleData = JSON.parse(xhr.responseText);
		console.log(scheduleData);
		//scheduleDom = document.getElementById("schedule");
		//scheduleDom.innerHTML = scheduleData["line"];

		lines[scheduleData["line"]].map( function (str) {
			station = JSON.parse(str);
			console.log(station["name"]);
		});
	}
	else if (xhr.readyState == 4 && xhr.status == 500) {
		console.log("fail");
		//scheduleDom = document.getElementById("schedule");
		//scheduleDom.innerHTML = '<p>fail</p>'
	}
}