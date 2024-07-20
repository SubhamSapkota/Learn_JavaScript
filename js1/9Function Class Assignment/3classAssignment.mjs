// make a arrow function named isGreaterThan18 , pass a value , the function must return true if the given age is greater or equals to 18 otherwise return false

let isGreaterThan18 = (age) =>{
  if(age >= 18){
    return true;
  }
  else{
    return false;
  }
}

let _isGreaterThan18 = isGreaterThan18(17);
console.log(_isGreaterThan18)