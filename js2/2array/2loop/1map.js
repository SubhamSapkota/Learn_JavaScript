//map

//[1,2,3,4] => [2,4,6,8]
//use map if
//input is array
//output is array
// input and output length are same

let ar1 = [10,11,12];
// let output = [20,22,24]
let ar2 = ar1.map((value, i)=>{
  return value * 2;
});
console.log(ar2);

let _ar1 = ar1.map((value, i)=>{
  return "a";
});
console.log(_ar1)


let ar3 = ar1.map((value, i)=>{
  return value * i;
});
console.log(ar3)

// 
let number = [1,3,4,5]
let _number = number.map((value,i)=>{
  if(value%2==1){
    return value*100;
  }
  else{
    return value;
  }
});
console.log(_number)

let number1 = [1,2,3,4];
let _number1 = number1.map((value,i)=>{
  if(i%2==1){
    return value*0;
  }
  else{
    return value*2
  }
});
console.log(_number1)

let name = ["n", "i","t","a","n"]
let _name = name.map((value,i)=>{
 if(i===0){
  return value.toUpperCase();
 }
 else{
  return value;
 }
});
console.log(_name)

let name2 = "nitan"
let _name2 = name2.split("");
console.log(_name2)