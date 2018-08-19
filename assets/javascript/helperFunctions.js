//points array
var pointsArr = response.routes[0].overview_path;

//returns array of latLng objects
var latLngs = response.routes[0].overview_path.map(function (point) {
    return google.maps.LatLng(point.lat(), point.lng());
});

for (var i = 0; i < pointsArr.length; i++) {
    if (i % 3 == 0) {
        pointsArrDiv3.push(pointsArr[i]);
    }
}

//get specified number of return values

function getSpecificNumOfPts(num) {
    var interval = Math.floor(pointsArr.length / 3);
    for (var i = 0; i < pointsArr.length; i++) {
        if (i % interval == 0) {
            pointsArrDivArb.push(pointsArr[i]);
        }
    }

}