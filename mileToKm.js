function mileToKm(number) {
const km = number*1.60934;
return km;
}

const myNumber = 45;
const kmConverted = mileToKm(myNumber);
console.log(kmConverted.toFixed(2));