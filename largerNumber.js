function largerNumber(numbers){
     var larger = numbers[0];
     for (var i = 0; i < numbers.length; i++){
          var element = numbers[i];
          if(element > larger){
               larger = element;
          }
     }
     return larger;
}

var numbers = [12, 13, 14, 15, 16, 17, 18, 19, 20];
var output = largerNumber(numbers);

console.log('larger number:' , output);
