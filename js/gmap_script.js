
var gmap;
gmap = new GMaps({
   el: '#map',
   lat: 40.441533,
   lng: -79.958858,
   zoom: 15, 
   zoomControl: false,
   scaleControl: false,
   scrollwheel: false,
   disableDoubleClickZoom: true,
   background: '#FF0000',
   styles: [ { "stylers": [ { "hue": "#ffffff" }, {saturation: -100}, {gamma: .5} ] } ]
});
gmap.addMarker({
   lat: 40.441533,
   lng: -79.958858,
   title: 'Marker with InfoWindow',
   infoWindow: {
	content: '<p>HTML Content</p>'
   }
});

