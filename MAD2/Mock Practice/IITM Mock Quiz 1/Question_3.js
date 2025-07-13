// Question 3. Consider the following Javascript Program and predict the output if executed
// Answer: Depends on the mode it shows both 20 and 10 , 5 and 10
var x = 5;
let obj = {
    'x' : 10,
    func : (x) => {
        this.x = x;
    }
}
obj.func(20);
console.log(x, "and", obj.x);