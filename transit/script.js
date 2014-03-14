

var xhr;
var myLat = 0;
var myLng = 0;
var map;
var infowindow = new google.maps.InfoWindow();
var meMarker;
var markers = [];
var pathcoordinates = [];
var stationname;

function init()
{

	var me = new google.maps.LatLng(myLat, myLng);

	// Set up map
	var myOptions = {
	zoom: 15, // The larger the zoom number, the bigger the zoom
	center: me,
	mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	// Create the map in the "map_canvas" <div>
	map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	getMyLocation();
	
	
	xhr = new XMLHttpRequest();
	xhr.open("get", "http://mbtamap.herokuapp.com/mapper/rodeo.json", true);
	
	lines = new Object();
	lines["blue"] = [ '{"name":"Wonderland", "latitude":42.41342, "longitude":-70.991648}', '{"name":"Revere Beach", "latitude":42.40784254, "longitude":-70.99253321}', '{"name":"Beachmont", "latitude":42.39754234, "longitude":-70.99231944}', '{"name":"Suffolk Downs", "latitude":42.39050067, "longitude":-70.99712259}', '{"name":"Orient Heights", "latitude":42.386867, "longitude":-71.00473599999999}', '{"name":"Wood Island", "latitude":42.3796403, "longitude":-71.02286539000001}', '{"name":"Airport", "latitude":42.374262, "longitude":-71.030395}', '{"name":"Maverick", "latitude":42.36911856, "longitude":-71.03952958000001}','{"name":"Aquarium", "latitude":42.359784, "longitude":-71.051652}', '{"name":"State Street", "latitude":42.358978, "longitude":-71.057598}', '{"name":"Government Center", "latitude":42.359705, "longitude":-71.05921499999999}','{"name":"Bowdoin", "latitude":42.361365, "longitude":-71.062037}'];

    lines["orange"] = [ '{"name":"Oak Grove", "latitude":42.43668, "longitude":-71.07109699999999}','{"name":"Malden Center", "latitude":42.426632, "longitude":-71.07411}', '{"name":"Wellington", "latitude":42.40237, "longitude":-71.077082}', '{"name":"Sullivan", "latitude":42.383975, "longitude":-71.076994}','{"name":"Community College", "latitude":42.373622, "longitude":-71.06953300000001}', '{"name":"North Station", "latitude":42.365577, "longitude":-71.06129}', '{"name":"Haymarket", "latitude":42.363021, "longitude":-71.05829}', '{"name":"State Street", "latitude":42.358978, "longitude":-71.057598}', '{"name":"Downtown Crossing", "latitude":42.355518, "longitude":-71.060225}', '{"name":"Chinatown", "latitude":42.352547, "longitude":-71.062752}', '{"name":"Tufts Medical", "latitude":42.349662, "longitude":-71.063917}', '{"name":"Back Bay", "latitude":42.34735, "longitude":-71.075727}', '{"name":"Mass Ave", "latitude":42.341512, "longitude":-71.083423}', '{"name":"Ruggles", "latitude":42.336377, "longitude":-71.088961}', '{"name":"Roxbury Crossing", "latitude":42.331397, "longitude":-71.095451}', '{"name":"Jackson Square", "latitude":42.323132, "longitude":-71.099592}', '{"name":"Stony Brook", "latitude":42.317062, "longitude":-71.104248}', '{"name":"Green Street", "latitude":42.310525, "longitude":-71.10741400000001}', '{"name":"Forest Hills", "latitude":42.300523, "longitude":-71.113686}'];

	lines["red"] = ['{"name":"Alewife", "latitude":42.395428, "longitude":-71.142483}', '{"name":"Davis", "latitude":42.39674, "longitude":-71.121815}', '{"name":"Porter Square", "latitude":42.3884, "longitude":-71.11914899999999}', '{"name":"Harvard Square", "latitude":42.373362, "longitude":-71.118956}', '{"name":"Central Square", "latitude":42.365486, "longitude":-71.103802}', '{"name":"Kendall/MIT", "latitude":42.36249079, "longitude":-71.08617653}', '{"name":"Charles/MGH", "latitude":42.361166, "longitude":-71.070628}', '{"name":"Park Street", "latitude":42.35639457, "longitude":-71.0624242}', '{"name":"Downtown Crossing", "latitude":42.355518, "longitude":-71.060225}', '{"name":"South Station", "latitude":42.352271,"longitude":-71.05524200000001}', '{"name":"Broadway", "latitude":42.342622, "longitude":-71.056967}', '{"name":"Andrew", "latitude":42.330154, "longitude":-71.057655}',  '{"name":"JFK/UMass", "latitude":42.320685, "longitude":-71.052391}', '{"name":"Savin Hill", "latitude":42.31129, "longitude":-71.053331}', '{"name":"Fields Corner", "latitude":42.300093, "longitude":-71.061667}',  '{"name":"Shawmut", "latitude":42.29312583, "longitude":-71.06573796000001}','{"name":"Ashmont", "latitude":42.284652, "longitude":-71.06448899999999}', '{"name":"North Quincy", "latitude":42.275275, "longitude":-71.029583}', '{"name":"Wollaston", "latitude":42.2665139, "longitude":-71.0203369}', '{"name":"Quincy Center", "latitude":42.251809, "longitude":-71.005409}',   '{"name":"Quincy Adams", "latitude":42.233391, "longitude":-71.007153}', '{"name":"Braintree", "latitude":42.2078543, "longitude":-71.0011385}' ];								   
	
}


function getMyLocation() {
	if (navigator.geolocation) { 
	
		navigator.geolocation.getCurrentPosition(function(position){
			myLat = position.coords.latitude;
			myLng = position.coords.longitude;
			xhr.onreadystatechange = dataReady;
			xhr.send(null);
		});
	}
	else {
		alert("Geolocation is not supported by your web browser.  What a shame!");
		}
}



function dataReady() {

	me = new google.maps.LatLng(myLat, myLng);
	map.panTo(me);

	contents = "<h2>You are here</h2>";

	meMarker = new google.maps.Marker({
		position: me,
		title: "<h1>You are here</h1>"
	});
	meMarker.setMap(map);
	mecontents = meMarker.title;
		

	mindist = 1000; //for calculating closest station

	if (xhr.readyState == 4 && xhr.status == 200) {

		scheduleData = JSON.parse(xhr.responseText);

		lines[scheduleData["line"]].map( function (str) {

			station = JSON.parse(str);
			
			latitude = station["latitude"];
			longitude = station["longitude"];
			pos = new google.maps.LatLng(latitude,longitude);
			pathcoordinates.push(pos);

			var image = 'http://tuftsdev.github.io/comp20'
			mark = new google.maps.Marker({
				position: pos,
				title: station["name"],
				icon: 'http://tuftsdev.github.io/comp20-hweiss/transit/markerimg.png'

			});
			markers.push(mark);

			R = 6371;
			dLat = toRad(myLat-latitude);
			dLon = toRad(myLng - longitude);	
			lat1 = toRad(latitude);			
			lat2 = toRad(myLat);
			
			a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
			
			c = 2 * Math.atan2(Math.sqrt(Math.abs(a)), Math.sqrt(Math.abs(1-a)));
			
			d = R * c; // km
			d = d * .621371; //miles

			if( d < mindist) {
				 mindist = d;
				 stationname = station["name"];
			}

		});
			mecontents = mecontents + "<p> The closest station to your location is " + stationname + " at " + mindist + " away.</p>";
			infowindow.setContent(mecontents);
			infowindow.open(map,meMarker);

			path = new google.maps.Polyline({

				path: pathcoordinates,
				strokeColor: '#FF0000',
				strokeWeight: 2
			});

			path.setMap(map);

			for (var m in markers) {

				markers[m].setMap(map);
				
				google.maps.event.addListener(markers[m], 'click', function() {
					
					currentmarker = this;

					content = "<h2>" + currentmarker.title  + "</h2><table><tr><th>Arrival Schedule</th><th>Schedule Destination</th></tr>";

					for(i = 0; i<scheduleData["schedule"].length; i++){
						destination = scheduleData["schedule"][i];

						stops = destination["Predictions"];

						for(j=0; j < stops.length; j++){

							s = stops[j];
							if(s.Stop==currentmarker.title){
								content = content + "<tr><td>" + s["Seconds"] + "</td><td>" + destination["Destination"] + "</td></tr>";
							}
						}
					}
				
					content = content + "</table>";

					infowindow.setContent(content);
					infowindow.open(map,currentmarker);
				
				});
			}
			
	}


	else if (xhr.readyState == 4 && xhr.status == 500) {
		mecontents = mecontents + '<p>There are no stations near you</p>'
		infowindow.setContent(mecontents);
		infowindow.open(map,meMarker);
		console.log("fail");
	}

}

function toRad(x) {
	return x * Math.PI / 180;
}
