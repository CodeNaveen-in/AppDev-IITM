// Question 2. Consider the following JavaScript program and predict the output if executed
// Answer : NaN (as there is nothing in argument to apply)
const a = {
    'x1' : 10,
    func1 : function() {
        console.log(5 + this.x1);
    }
}

const b = {
    'x1' : 20,
    func2 : function() {
        c = a.func1;
        c.apply();
    }
}

b.func2();