var car = {
    wheels: 4,
    topSpeed: 110,
    currentSpeed: 0,
    color: 'blue',
    inWorkingOrder: true,
    damage: ['chipped windshield','dented back left bumper', 'passenger window squeaks'],
    "engine displacement": 1.7
}

//FOR-IN loop to iterate through "car" object

for (var key in car) {
    console.log(car[key]);
}

car[color]
car.color
car.engine displacement
let key = "engine dislplacement"
car.key