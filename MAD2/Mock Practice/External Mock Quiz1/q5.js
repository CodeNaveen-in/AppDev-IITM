// Question : Tell the output of the program

//Answer is 121 as counter 1 wil increaase and then counter 2 began to increase when called
function outer() {
    let count = 0;
    return function inner() {
        return ++count;
    };
}

const counter1 = outer();
const counter2 = outer();

console.log(counter1());
console.log(counter1());
console.log(counter2());