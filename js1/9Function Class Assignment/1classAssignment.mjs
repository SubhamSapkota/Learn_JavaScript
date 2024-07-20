//make a arrow function that will return true if type of input is string else return false.

let stringType = (a)=>{
  if(typeof a ==='string'){
    return true;
  }
  else{
    return false;
  }
}
 
let _stringType = stringType("nikhil");
console.log(_stringType)