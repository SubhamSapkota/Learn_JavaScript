let input = ["my", "name", "is"];

//_input = ['MYN', 'NAMEN', 'ISN']
let _input = input.map((value,i)=>{
  // return `${value.toUpperCase()}N`
  // return value.toUpperCase() + "N"

  return `${value}n`.toUpperCase();
})

console.log(_input);