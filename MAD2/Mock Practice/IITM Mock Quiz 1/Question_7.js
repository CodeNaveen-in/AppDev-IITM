// Question 7. Consider the below snippet and predict the output

let x1 = { 'a': 5, 
    'b': 'hello',
    'add': function (x) {
        return this.b + ' ' + x;
    }
}

let x2 = { 'a': 5, 
    'b': 'Welcome',
    'add': function (x) {
        return this.a + ' ' + x
    }
}

let y = x1.add
console.log(y.call(x2, "Diya"))