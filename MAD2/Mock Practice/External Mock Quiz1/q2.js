// Consider the question and answer with output 

// Answer: Reference Error as you are letting let describe without using
let x = 5;
(function () {
    console.log(x);
    let x = 10;
}) ();