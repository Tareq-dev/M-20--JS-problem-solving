

function arrayTotal (numbers) {
     let sum = 0;
     for (let i = 0; i < numbers.length; i++) {
          const element = numbers[i];
          sum += element;
     }
return sum;

}
 const arrayNumber = [12,45,8,165,152,452,3,414,23,14];

 console.log(arrayTotal(arrayNumber));