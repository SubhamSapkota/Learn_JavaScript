let a = ["subham", "ram", "anubhav", 1, true, undefined];
//          0,         1,         2,    3,   4,    5
console.log(a)

//get particular element
console.log(a[2]) //"anubav"
console.log(a[4]) //true

//to change particular element
a[1] = "shyam";
a[0] = "aashish";
console.log(a)

//to delete particular element
delete a[4];
console.log(a) //["aashish", "shyam", "anubhav", 1,, undefined]
//while deleting an item from array, the value is deleted but index remains

console.log(a[5])

/* 
  array is collection of value
  index
      index starts with 0 ...
      it is used to get particular element
      to change particular element
      to delete particular element

 */