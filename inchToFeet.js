function inchToFeet(num){
     var feet = num /12;
     return feet;
}

const myNumber = 5;
const feetConverted = inchToFeet(myNumber);
const inchConvertedToFeet = feetConverted.toFixed(2);
console.log(inchConvertedToFeet);