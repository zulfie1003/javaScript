//Normal Function : A function declaration is the classic way to create a function in JavaScript.
function greet(){
    console.log("hello");
    
}
greet();

// arrow function : An arrow function is a shorter, modern way to write functions in JS.

const greet=(count)=>{
    for(let i=0;i<count;i++){
        console.log("hello worls ")
    }
}
greet(5);

const square=(num)=> num*num; // If the function has one line and returns something, arrow functions can omit {} and return.
square(5);

// callback function : A callback function is a function that you pass as an argument to another function.
//The receiving function calls it back.

const calculate=(a,b,operation)=>{
    return operation(a,b);
}
//method 1 : An anonymous function is a function without a name.
const addition=calculate(3,4 , function(num1,num2){
    return num1+num2;
});
console.log(addition);
//method 2 : Arrow functions can also be passed as callbacks.
const substraction=(a,b)=>a-b;
const subresult=calculate(6,3,substraction)
console.log(subresult);
//method 3 : A named function can also be used as a callback.
function multiply(a,b){
    return a*b;
}
const mulresult=calculate(3,2,multiply);
console.log(mulresult);
