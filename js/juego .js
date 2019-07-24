const width  = 400;
const heigh = 400;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(heigh)
};

let $mapa = document.getElementById("mapa");
let $distance = document.getElementById("distance");

$mapa.addEventListener("click", function(e){
    let distance = getDistance(e, target);
    let distanceHint = getDistanceHint(distance);
    $distance.innerHTML = distanceHint;
    console.log(distanceHint)
    
})