let names =["nitan", "hari","ram","shyam"];

//result = [ 'nitan thapa', 'hari thapa', 'ram thapa','shyam thapa ]

let result = names.map((value,i)=>{
  return `${value} thapa`;
});
console.log(result);

