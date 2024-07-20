let fatherDetail = {
  name : "Binay Sapkota",
  address: "Harion",
  age: 50,
  isMarried: true,
  child: ["sagun", "subham"],
  wife : {
    name: "shova",
    age:45,
    address: "harion"
  },
  sum: ()=>{
    return 1 + 2;
  }
};

console.log(fatherDetail)
console.log(fatherDetail.child[0])
console.log(fatherDetail.wife)
console.log(fatherDetail.wife.name)
console.log(fatherDetail.wife.age, fatherDetail.wife.address)
console.log(fatherDetail.sum())