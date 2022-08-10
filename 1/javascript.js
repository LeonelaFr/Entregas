

function gastosConIva (num){
    return (num/100 *21)+ num;
}



function map(array, callback) {
    let arrayNum2 = []; 
    let i; 
    for (i = 0; i < array.length; i++)
      arrayNum2[i] = callback(array[i]);
    return arrayNum2;
  }

  let arrayNum= [100,21,200];



