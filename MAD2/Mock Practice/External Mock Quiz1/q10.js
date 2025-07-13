//Question : What would be the output of the code? 

// Answer is A medium willow tree as the parameter of 15 given is not considered and found into property where it's not given so sounted as not more 15 and deemed as medium
let Tree = {
    name: "Oak",
    size: 5,
    description: function(size) {
        return `A ${this.size > 10 ? 'large' : 'medium'} ${this.name} tree.`;
    }
}

const willow = {
    name: 'Willow'
}

const returnedString = Tree.description.call(willow, 15)

console.log(returnedString)