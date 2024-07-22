let input = ["my", "name", "is"];

// _input = ["MY" ,"NAME", "IS"]
let _input = input.map((value,i)=>{
  return value.toUpperCase();
});

console.log(_input);