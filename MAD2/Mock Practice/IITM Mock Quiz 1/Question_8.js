//Question 8. consider the below code and predict the output

// Answer is [1,2,3,4,5,6,7,8] as via the call the list has been extended
let x = {
    a:[1,2,3,4,5],
    b:function(){return[...this.a,6,7,8]}
}

let c = x.b
console.log(c.call(x))