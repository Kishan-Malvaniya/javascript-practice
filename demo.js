console.log("Hello world!");
var a = 10;
var b = 20;
var c = a + b;

console.log("A value is "+a);
console.log("B value is "+b);
console.log("C value is "+c);



console.log("Hello world");
var a = 10;
var b = 20;
var c = a + b;

if(c == 10)
{
    console.log("C is 10");
}else if(c > 10)
{
    console.log("C is > 10");
}else{
    console.log("C is 10");
}


//1  simple Function

let  msg = () => console.log("Funtion Called");
msg();

//2 parameter
let greeting = (x) => console.log("Hi My Name is "+ x);
greeting("kishan");

//3 parameter with return value
let = (x,y) => x+y;
var ans = sum(10,20);
console.log("Sum is "+ ans);

//4 Ternary Condition
let age = 5;
let welcome = (age < 18) ?  // Condition
    () => console.log('Baby'): // True
    () => console.log('Adult'); //False 
welcome(); // Baby

//5 Return Value Multiple Line
let addition = (a,b) => {
    let result = a + b;
    return result;
}
let result1 = addition(5,7);
console.log(result1); //12

var userData = {
    name : "Kishan",
    gender : "Male"
}
console.log(userData)

var newData  = {
    ...userData,
    city:"Ahm"
}
console.log(newData)

function demo(...arg) {
    console.log(arg);
}
demo();
demo(10);
demo(10,20);
demo(10,20,30);
demo(10,20,30,40);

function demo(...args) {
    for (var i = 0; i < arg.length; i++) {
        console.log(arg[i]);
    }
}
demo(10,20,30,40);

// Simple multi - line string
let a = `Hello
                How Are You ?.
                    Thanks`;
console.log(a); // Print Data  

// String with embedded variable and expression 
let a = 10;
let b = 20;
let result = `The sum of ${a} and ${b} is ${a+b}.`;
console.log(result); //The sum of 10 and 20 is 30.


var a = 10;
var b = 20;
var c = a + b;

//simple method
console.log("A Value is"+ a + "\n Value is" + b + "\n value is "+c);
//Using Backtitck
console.log(`A value is ${a} \nB value is ${b} C is value ${c}`);

let initialchars = ['A', 'B'];
let chars = [...initialchars, 'C' , 'D'];
console.log(chars); //["A", "B", "C", "D"]

let number = [1,2];
let moreNumber = [3,4];
let allNumber = [...numbers,...moreNumber];
console.log(allNumber); // [1,2,3,4]

let scores = [80,70,90];
let copiedScores = [...scores];
console.log(copiedScores); // [80,70,90]

let myfunc = function(...args) {
    console.log(args);
}

myfunc(3); //[3]
myfunc(4,5,6); // [4,5,6]

function demo(...args) {
    console.log(args);

    console.log(args[0]);
    console.log(args[1]);
}

demo(10,20);


function demo(a,b) {
    console.log(a,b);
}
demo();
demo(10);
demo(10,20);
demo(10,20,30);
demo(10,20,30,40);