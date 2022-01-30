// factorial with for loop

function factorialContext(num){
     var factorial = 1;
     for (var i = 1; i <=num; i++)
            factorial = factorial*i;
     return factorial;
}
console.log(factorialContext(100));


//  factorial With While Loop

function factorialWithWhileLoop(num){
     let factorial = 1;
     let i = 1;
     while(i <=num){
          factorial = factorial*i;
          i++;
     }
     return factorial;
}
console.log(factorialWithWhileLoop(100));



