var planes;
var blindEternities;
function fetchPlanesAndPhenomenoms() {
    fetch("https://api.scryfall.com/cards/search?q=t:phenomenon+OR+t:plane", { method: "Get" }).then(function (data) {
        return data.json();
    }).then(function (json) {
        planes = json.data;
        console.log(json.data);
    }).then(function () {
        console.log(planes);
        blindEternities = new BlindEternities();
        blindEternities.start(planes);
    }).then(function () {
        blindEternities.goLeft(planes);
    }).then(function () {
        blindEternities.fillUpNulls(planes);
    }).then(function () {
        console.log(blindEternities.map);
    }).catch(function (err) {
        console.error(err);
    });
}
document.addEventListener('DOMContentLoaded', function () {
    console.log('loaded');
    fetchPlanesAndPhenomenoms();
});
