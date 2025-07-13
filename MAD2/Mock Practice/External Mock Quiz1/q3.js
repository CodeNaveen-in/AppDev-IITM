// Question : What will be the output of the code

// Answer is undefined, world as the function is fully hoisted but variable is not so as it's logged before assgnment it's value id undefined 
console.log(myVar);
console.log(myFunc());

var myVar = "hello";
function myFunc() {
    return "World";
}