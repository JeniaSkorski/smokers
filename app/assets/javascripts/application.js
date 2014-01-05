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
//= require turbolinks
//= require bootstrap/bootstrap
//= require_tree .



function initialize() {
	var location_string = document.getElementById("map-canvas").getAttribute("data-center");
	var location = jQuery.parseJSON(location_string);
	var mapOptions = {
		center : new google.maps.LatLng(location[0], location[1]),
		zoom : 12
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
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
			title : places[i].name
		});
		markers.push(marker);
		contentStrings[i] = '<h1>' + places[i].name + '</h1><p><a href="' + places[i].website + '"target="_blank"> visit website </a> </p>';

		google.maps.event.addListener(marker, 'click', (function(marker, i) {
			return function() {
				infowindow.setContent(contentStrings[i]);
				infowindow.open(map, marker);
			};
		})(marker, i));

}

}

function initialize_place() {
  
  var place_lat_string = document.getElementById("map-canvas").getAttribute("data-lat");
  var place_lng_string = document.getElementById("map-canvas").getAttribute("data-lng");
  var place_name_string = document.getElementById("map-canvas").getAttribute("data-name");
  var place_website_string = document.getElementById("map-canvas").getAttribute("data-website");
  
  var place_lat = jQuery.parseJSON(place_lat_string);
  var place_lng = jQuery.parseJSON(place_lng_string);
  var place_name = jQuery.parseJSON(place_name_string);
  var place_website = jQuery.parseJSON(place_website_string);
  
  var placeLatlng = new google.maps.LatLng(place_lat,place_lng);
  
  var contentString = '<h1>' + place_name + '</h1><p><a href="' + place_website + '"target="_blank">' + place_website +'</a> </p>';
  
  var mapOptions = {
    zoom: 10,
    center: placeLatlng
  };
  
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var infowindow = new google.maps.InfoWindow({
	content: contentString});
  var marker = new google.maps.Marker({
      position: placeLatlng,
      map: map,
      title: place_name
  });
google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

jQuery(document).ready(function($) {
    $('#my-slideshow').bjqs({
        'height' : 320,
        'width' : 620,
        'responsive' : true
    });
    $('#map-btn').click(function(e) {
    	e.preventDefault();
    	$('#places_column').hide();
    	$('#map-canvas').show();
    });
    $('#list-btn').click(function(e) {
    	e.preventDefault();
    	$('#places_column').show();
    	$('#map-canvas').hide();
    });
    
});



