/*  && => and
    || => or
    ! => not 
*/
//not
console.log(!true); //false
console.log(!false); //true
// && => and
// output will be true if are true
console.log(true && true && false && true); //false
console.log(true && true && true && true); //true
console.log(true && true && true && true); //true
console.log(true && true && true && false); //false
console.log(false && false && false && false); //false
// || => or
// output will be true if any one is true
console.log(true || true || false || true); //true
console.log(true || true || true || true); //true
console.log(true || true || true || true); //true
console.log(true || true || true || false); //true
console.log(false || false || false || false); //false

/* In order to select multiple similar statement we can first select that statement and press (ctrl+d )*/
console.log(true== true== false== true); //false
console.log(true== true== true== true); //true
console.log(true== true== true== true); //true
console.log(true== true== true== false); //false
console.log(false != false != false != false); //false
console.log(false != false != false != false); //false