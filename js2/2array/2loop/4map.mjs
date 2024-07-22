let names = [11, 16, 18, 15, 10]

/* 
result =[ 11, 0, 0, 15, 0 ]
*/

let result = names.map((value,i)=>{
  if(value%2===0){
    return value * 0;
  }
  else{
    return value;
  }
});

console.log(result);