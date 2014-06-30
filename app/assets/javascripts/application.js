// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.raty.js
//= require jquery.jscrollpane
//= require bootstrap/bootstrap
//= require_tree .


function initialize() {

	var location_string = document.getElementById("map-canvas").getAttribute("data-center");
	var location = jQuery.parseJSON(location_string);
	
	var directionsDisplay;
	

	var mapOptions = {
		center : new google.maps.LatLng(location[0], location[1]),
		zoom : 12,
		styles : [{
			'featureType' : 'water',
			'stylers' : [{
				'visibility' : 'on'
			}, {
				'color' : '#acbcc9'
			}]
		}, {
			'featureType' : 'landscape',
			'stylers' : [{
				'color' : '#f2e5d4'
			}]
		}, {
			'featureType' : 'road.highway',
			'elementType' : 'geometry',
			'stylers' : [{
				'color' : '#c5c6c6'
			}]
		}, {
			'featureType' : 'road.arterial',
			'elementType' : 'geometry',
			'stylers' : [{
				'color' : '#e4d7c6'
			}]
		}, {
			'featureType' : 'road.local',
			'elementType' : 'geometry',
			'stylers' : [{
				'color' : '#fbfaf7'
			}]
		}, {
			'featureType' : 'poi.park',
			'elementType' : 'geometry',
			'stylers' : [{
				'color' : '#c5dac6'
			}]
		}, {
			'featureType' : 'administrative',
			'stylers' : [{
				'visibility' : 'on'
			}, {
				'lightness' : 33
			}]
		}, {
			'featureType' : 'road'
		}, {
			'featureType' : 'poi.park',
			'elementType' : 'labels',
			'stylers' : [{
				'visibility' : 'on'
			}, {
				'lightness' : 20
			}]
		}, {}, {
			'featureType' : 'road',
			'stylers' : [{
				'lightness' : 20
			}]
		}]
	};
	
	
	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
	directionsDisplay.setMap(map);

	var markers = new Array();
	var contentStrings = new Array();
	var marker;
	var infowindow = new google.maps.InfoWindow({
	});
	var places_string = document.getElementById("map-canvas").getAttribute("data-places");
	var places = jQuery.parseJSON(places_string);

	for (var i = 0; i < places.length; i++) {

		marker = new google.maps.Marker({

			position : new google.maps.LatLng(places[i].latitude, places[i].longitude),
			map : map,
			animation: google.maps.Animation.DROP,
			title : places[i].name,
			
		});
		markers.push(marker);
		console.log(document.getElementById("lang_div").innerHTML);	
		
		if (document.getElementById("lang_div").innerHTML.replace(/\W/g, '')=="en")
			{
			contentStrings[i] = '<a id="infobox" href= "/places/' + places[i].id +  '"><h3>' + places[i].name + '</h3></a><p>' +places[i].address+ '</p>';
			}
		if (document.getElementById("lang_div").innerHTML.replace(/\W/g, '')=="he")
			{contentStrings[i] = '<a id="infobox" href= "/he/places/' + places[i].id +  '"><h3>' + places[i].h_name + '</h3></a><p>' +places[i].h_address+ '</p>';
			}	
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				infowindow.setContent(contentStrings[i]);
				infowindow.open(map, marker);
			};
		})(marker, i));

	}

}




function initialize_place() {
	
	var place_lat = jQuery.parseJSON(document.getElementById("map-canvas").getAttribute("data-lat"));
	var place_lng = jQuery.parseJSON(document.getElementById("map-canvas").getAttribute("data-lng"));
	var place_name = jQuery.parseJSON(document.getElementById("map-canvas").getAttribute("data-name"));
	var place_h_name = jQuery.parseJSON(document.getElementById("map-canvas").getAttribute("data-h-name"));
	var place_website = jQuery.parseJSON(document.getElementById("map-canvas").getAttribute("data-website"));
	var place_address = jQuery.parseJSON(document.getElementById("map-canvas").getAttribute("data-address"));
	var place_h_address = jQuery.parseJSON(document.getElementById("map-canvas").getAttribute("data-h-address"));

	var placeLatlng = new google.maps.LatLng(place_lat, place_lng);
	
	//console.log($("lang_div").innerHTML.replace(/\W/g, ''));	
	
	var contentString = '<h3>' + place_name + '</h3><p>' + place_address + '</p>';

	var mapOptions = {
		zoom : 16,
		center : placeLatlng,
		styles : [{
			'featureType' : 'water',
			'stylers' : [{
				'visibility' : 'on'
			}, {
				'color' : '#acbcc9'
			}]
		}, {
			'featureType' : 'landscape',
			'stylers' : [{
				'color' : '#f2e5d4'
			}]
		}, {
			'featureType' : 'road.highway',
			'elementType' : 'geometry',
			'stylers' : [{
				'color' : '#c5c6c6'
			}]
		}, {
			'featureType' : 'road.arterial',
			'elementType' : 'geometry',
			'stylers' : [{
				'color' : '#e4d7c6'
			}]
		}, {
			'featureType' : 'road.local',
			'elementType' : 'geometry',
			'stylers' : [{
				'color' : '#fbfaf7'
			}]
		}, {
			'featureType' : 'poi.park',
			'elementType' : 'geometry',
			'stylers' : [{
				'color' : '#c5dac6'
			}]
		}, {
			'featureType' : 'administrative',
			'stylers' : [{
				'visibility' : 'on'
			}, {
				'lightness' : 33
			}]
		}, {
			'featureType' : 'road'
		}, {
			'featureType' : 'poi.park',
			'elementType' : 'labels',
			'stylers' : [{
				'visibility' : 'on'
			}, {
				'lightness' : 20
			}]
		}, {}, {
			'featureType' : 'road',
			'stylers' : [{
				'lightness' : 20
			}]
		}]
	};
    
	var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	var infowindow = new google.maps.InfoWindow({
		content : contentString
	});
	var marker = new google.maps.Marker({
		position : placeLatlng,
		map : map,
		animation: google.maps.Animation.DROP,
		title : place_name,
		
	});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map, marker);
	
	});

    //user location//
    // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
                                       position.coords.longitude);

      var infowindow = new google.maps.InfoWindow({
        map: map,
        position: pos,
        content: 'You are here'
      });
	
      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
//location end

google.maps.event.addDomListener(window, 'load', function(){
	initialize_place();
	alert("ccc");
	});/*calcRoute(32.0806126, 34.7738658, 31.7819054, 35.2213715)*/

}
function calcRoute(pos1, pos2, placeLatLng1, placeLatLng2) {
	alert ("bbbb");
  var directionsService = new google.maps.DirectionsService();
  var selectedMode = document.getElementById('mode').value;
  pos = google.maps.LatLng(pos1, pos2);
  placeLatLng = google.maps.LatLng(placeLatLng1, placeLatLng2);
	alert ("aaaaa");
	alert(pos);	
  var request = {
      origin: pos,
      destination: placeLatLng,
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: google.maps.TravelMode[selectedMode]
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
    	alert("aaa");
      directionsDisplay.setDirections(response);
    }
  });
}




//end of map///////////////////////////////////////////////////////////////
jQuery(document).ready(function($) {


	$('#map-btn').click(function(e) {
		e.preventDefault();
		$('#city-container').removeClass('list-view');
	});
	$('#list-btn').click(function(e) {
		e.preventDefault();
		$('#city-container').addClass('list-view');
	});

	//HEBREW
	$('#h-map-btn').click(function(e) {
		e.preventDefault();
		$('#city-container').removeClass('h-list-view');
	});
	$('#h-list-btn').click(function(e) {
		e.preventDefault();
		$('#city-container').addClass('h-list-view');
	});

	//end hebrew
	  
});


//ratings:
function rateplaces(id, avg_rating) {
	var string = "#" + id + "";
	$(string).raty({
		readOnly : true,
		start : avg_rating,
		path : '/assets'
	});

}

//facebook stuff:

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=644565478915600";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));