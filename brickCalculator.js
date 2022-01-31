

//            first 10 tola = 15 feet; 
//            second 10 tola = 12 feet; 
//            21- n tola = 10 feet; 
//            per feet bricks = 1000;


function brickCalculator(floor){
     var bricks = 0;
     if(floor <= 10){
        bricks = floor*15*1000;
     }
     else if(floor <=20){
        var first10floor = 10*15*1000;
        var remaining  = floor - 10;
        var second20floor = remaining*12*1000;
        bricks = first10floor + second20floor;
     }
     else {
        var first10floor = 10*15*1000;
        var second20floor = 10*12*1000;
        var remaining = floor -20;
        var thirdPart = remaining *10*1000;
  
        bricks = first10floor + second20floor + thirdPart;
     }
     return bricks;
  }
  console.log(brickCalculator(22));

