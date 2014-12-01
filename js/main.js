$(document).ready(function() {
   

    $('.js-menu-icon').click(function(){
       $('.js-nav').toggleClass('hidden');
    });





var map;
var paramanaHQ = new google.maps.LatLng(52.3683885, 4.8787973);
var mapIcon = 'images/paramana_logo.svg'

var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

  var featureOpts = [
    {
      stylers: [
        { hue: '#536C8B' },
        { visibility: 'simplified' },
        { gamma: 0.2 },
        { weight: 0.5 }
      ]
    },
    {
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    },
    {
      featureType: 'water',
      stylers: [
        { color: '#272837' }
      ]
    }
  ];

  var mapOptions = {
    zoom: 13,
    center: paramanaHQ,
    disableDefaultUI: true,
    scrollwheel: false,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };



  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var styledMapOptions = {
        name: 'Custom Style'
    };

    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

    var marker = new google.maps.Marker({
      position: paramanaHQ,
      map: map,
      icon: mapIcon
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

});










