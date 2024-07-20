// make a arrow function named isEven , pass a value, that return true if the given number is even else return false

let isEven = (number)=>{
 if(number%2 === 0){
  return true;
 }
 else{
  return false;
 }
}
let _isEven = isEven(3);
console.log(_isEven)
