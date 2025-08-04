const calculation = {
    a:0,
    b:0,
    calculate: function(a,b) {
        this.a = a;
        this.b = b;
        return a + b;
    }
}

console.log(calculation.calculate(20,50));