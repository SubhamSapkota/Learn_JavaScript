// filter greater than 17

let number = [11, 18, 19, 1];

let output = number.filter((value,i)=>{
  if(value>17){
    return true;
  }
  // else{
  //   return false;
  // }
});
console.log(output);

/* 
by default return is false
*/