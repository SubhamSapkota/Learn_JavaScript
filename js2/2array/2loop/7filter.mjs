/* 
syntax
execution
*/

let input=[1,2,3,4,5,6]
let output = input.filter((value,i)=>{
  if(value%2===0){
    return true;
  }
  else{
    return false;
  }
});
console.log(output);