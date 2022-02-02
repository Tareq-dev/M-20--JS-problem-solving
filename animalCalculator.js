
//            first 10 mile = 15 animal; 
//            second 10 mile = 30 animal; 
//            21- n tola = 50 animal; 

var depth = 22;
function animalCalculator(depth){
    var animal = 0;
    if( depth <=10){
        animal = depth*15;
    }
    else if( depth <=20){
        var firstPart = 10*15;
        var remaining = depth - 10;
        var secondPart = remaining *30;
        animal = firstPart +  secondPart;
    }
    else {
         var firstPart = 10*15;
         var secondPart = 10 * 30;
         var remaining = depth - 20;
         var thirdPart = remaining*50;
         animal = firstPart + secondPart + thirdPart;
    }
    return animal;
}

console.log(animalCalculator(25));


