//          1 chair = 1 cf
//          1 table = 3 cf
//          1 khat =  5 cf

function woodCalculator(chair, table, khat){
   const  totalWood = (chair*1)+ (table*3) + (khat*5);
   return totalWood;
}

console.log('apnr chair, table, khat banaite wood lagbe ', woodCalculator(4,2,2) ,'cubic feet');



