function greet(){
    console.log("hello");
    
}
greet();

// arrow function 

const greet=(count)=>{
    for(let i=0;i<count;i++){
        console.log("hello worls ")
    }
}
greet(5);

const square=(num)=> num*num;
square(5);

// callback function 

const calculate=(a,b,operation)=>{
    return operation(a,b);
}
//method 1 
const addition=calculate(3,4 , function(num1,num2){
    return num1+num2;
});
console.log(addition);
//method 2
const substraction=(a,b)=>a-b;
const subresult=calculate(6,3,substraction)
console.log(subresult);
//method 3
function multiply(a,b){
    return a,b;
}
const mulresult=calculate(3,2,multiply);
console.log(mulresult);
