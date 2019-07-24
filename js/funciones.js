let getRandomNumber = size => {
  return Math.floor(Math.random() * size);
}    

let getDistance = (e, target) => {
  let diffx = e.offsetX - target.x;
  let diffy = e.offsetY - target.y;
  return Math.sqrt((diffx * diffx) + (diffy * diffy))
}

let getDistanceHint = distance => {
    if (distance < 40) {
        return " !!!!  has encontrado el tesoro !!!!!";
    } else if (distance < 80 ) {
        return " estas cerca!!";
    } else if ( distance < 120 ) {
       return " te estas acercando ";
    } else if ( distance < 150) {
       return " estas tibio!!";
    } else if ( distance < 200) {
       return " estas frio ";
    } else if ( distance < 250) {
       return "  estas muy lejos";
    } else if ( distance < 300) {
       return " estas muy lejos del tesoro amigo ";
    } else  {
        return " no creo que lo encuentres colega :D !!!";
    }
}