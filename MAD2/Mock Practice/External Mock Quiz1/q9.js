// Question : Explain the output of the code

// Answer undefined 100 as first print gives undefined scope and second one gives 100 
var value = 50;

const mainObj = {
    value: 42,
    getValue: function() {
        return this.value;
    }
};

const nextObj = {
    value: 100
}

const getValue1 = mainObj.getValue.bind()(nextObj);
const getValue2 = mainObj.getValue.bind(nextObj)();

console.log(getValue1);
console.log(getValue2);