function feetToMile(feet){
     const mile = feet * 0.000189394;
     return mile;
}

const myNumber = 15500;
const myConvertedMile = feetToMile(myNumber);
console.log(myConvertedMile);