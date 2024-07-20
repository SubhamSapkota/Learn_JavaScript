// make a arrow function that take a number and return you can enter room only if the enter number is less than 18 else you can not enter

let enterRoom = (enterNumber)=>{
  if (enterNumber < 18){
    return "you can enter room";
  }
  else{
    return "you cannot enter"
  }
}

let _enterRoom = enterRoom(17);
console.log(_enterRoom)