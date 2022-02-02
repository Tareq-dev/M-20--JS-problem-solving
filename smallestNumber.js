
function smalestNumber(numbers){
     var smalest = numbers[0];
     for (var i = 0; i < numbers.length; i++){
          var element = numbers[i];
          if(element < smalest){
               smalest = element;
          }
     }
     return smalest;
}

var numbers = [12, 13, 14, 15, 16, 17, 18, 19, 20];
var output = smalestNumber(numbers);

console.log('smalest number :' , output);