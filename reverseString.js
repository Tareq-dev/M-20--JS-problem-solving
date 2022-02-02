function reverseStr(text){
     let reverse = '';
     for (const letter of text){
          reverse = letter + reverse;
     }
return reverse;
}

const greating = 'Hey, do you miss me ? why are you kidding me?';

const reversed = reverseStr(greating);
console.log(reversed);