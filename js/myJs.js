// TASK 1 Answer...........................................................................

// x = 0
// y = 1
// Print the value of x
// Print the value of y
// x = x + 3
// y = y + x
// Print the value of x
// Print the value of y


// answer........................................................................................
// part 1

let x = 0;
let y = 1;

console.log(x);
console.log(y);

// Part 2

let X = x + 3;
let Y = y + X;

console.log(X);
console.log(Y);


// TASK 2........................................................................

let Resultx = 1 + 1 * 2;
let Resulty = (1 + 1) * 2;
let Resultz = 1 + ( 1 * 2 );
let Resulta =  1 + 1 * 2 / 2;
let Resultb =  (1 + 1 * 2 ) /  2;

console.log(Resultx);
console.log(Resulty);
console.log(Resultz);
console.log(Resulta);
console.log(Resultb);

// TASK 3.........................................................................

const always = 65;
let numOne = 6;
let numTwo = 45;

let sum = numOne + numTwo ;

if (sum === always || numOne === always || numTwo === always){
    console.log("true");
}else{
    console.log("false");
};

// TASK 4...............................................................
const alwaysNow = 3;
let InputOne = 3;
let InputTwo = 0;

let Newsum = InputOne + InputTwo ;

if (InputOne === alwaysNow && Newsum === alwaysNow ){
    console.log("true");
}else if (InputTwo === alwaysNow && Newsum === alwaysNow ){
    console.log("true");
}else {
    console.log("false");
};

// TASK 5...............................................................

function calculateTriangleArea(side1, side2, side3) {

    let s = (side1+side2+side3)/2;
    let area = Math.sqrt(s*(s - side1)*(s-side2)*(s-side3));

    console.log(area);

}
calculateTriangleArea(2,4,4);


// TASK 6...............................................................

 const array = [25,-50,30]
const max = array[array.length-1]
console.log(` Max: ${max}`)

// Task 7 ...............................................................
function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 
cToF(60);
fToC(145);

// Task 8...............................................................
function timeConvert(n) {
    var num = 71;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
    }
    
    console.log(timeConvert(200));

    // Task 8...............................................................
function timeConverter(n) {
    var number = 133;
    var hours = (number / 60);
    var remainhours = Math.floor(hours);
    var minutes = (hours - remainhours) * 60;
    var remainingminutes = Math.round(minutes);
    return number + " minutes = " + remainhours + " hour(s) and " + remainingminutes + " minute(s).";
    }
    
    console.log(timeConverter(200));

   // Task 9...............................................................
   let multiples = function (n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) {
            sum += i;
        }
    }
    document.write(sum);
};


multiples(1000);

console.log(sum);