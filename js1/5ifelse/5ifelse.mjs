/*
age 0 to 18 => underage =>if
age 19 to 60 => adult => else if
age 61 to 150 => old => else if
else none =>else
*/

let age = 151;

if(age >=0 && age <=18){
  console.log("underage")
}
else if(age >= 19 && age <= 60){
  console.log("Adult")
}
else if(age >=61 && age <= 150){
  console.log("old")
}
else{
  console.log("none")
}