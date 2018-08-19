//points array
var pointsArr = response.routes[0].overview_path;

//returns array of latLng objects
var latLngs = response.routes[0].overview_path.map(function(point) {
    return google.maps.LatLng(point.lat(), point.lng());
});