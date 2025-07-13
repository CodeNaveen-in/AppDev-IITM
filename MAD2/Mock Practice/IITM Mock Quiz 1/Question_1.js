// Question 1. Consider the following JavaScript program and predict the output if executed
// Answer : 20
const a = {
    'x1' : 10,
    func1 : function(){
        console.log(this.x1);
    }
}

const b = {
    'x1' : 20,
    func2 : function(){
        c = a.func1;
        c.apply(b, [10]);
    }
}

b.func2();