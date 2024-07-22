let names =["nitan", "hari","ram","shyam"];

/* result = [
  'my name is nitan thapa',
  'my name is hari thapa',
  'my name is ram thapa',
  'my name is shyam thapa'
] */


let result = names.map((value,i)=>{
  return `my name is ${value} thapa`;
});
console.log(result);