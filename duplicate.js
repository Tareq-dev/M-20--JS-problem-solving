
function removeDuplicate(names){
     const unique = [];
     for (const element of names){
          if(unique.indexOf(element) == -1){
               unique.push(element);
          }
     }
     return unique;
}

const biraniLine = ['jdn', 'ashik','arfan','mimha', 'rashin','marwa', 'marjiya','hira', 'hira', 'jdn', 'ashik','swty','liza', 'liza'];

const remove = removeDuplicate(biraniLine);

console.log(remove);



function removeDupliNums(numbers){
     const unique = [];
     for ( const element of numbers ){
          if (unique.indexOf( element) == -1 ){
               unique.push(element);
          }
     }
     return unique;
}

const idName = [2,4,5,7,8,4,6,5,12,45,4,5,7,8,12,5,1,5,2,4];

const removeNum = removeDupliNums(idName);
console.log(removeNum);





