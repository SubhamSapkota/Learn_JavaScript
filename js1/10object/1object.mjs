// let info = ["subham", "harion", 65]
let info = {
  name: "Subham", //key: value = property
  address: "harion",
  age: 65
};
console.log(info)

//getting specified value

console.log(info.name)
console.log(info.address)
console.log(info.age)

//
info.name = "Ram";
info.address = "kathmandu";
console.log(info)

//deleting
delete info.address;
console.log(info)