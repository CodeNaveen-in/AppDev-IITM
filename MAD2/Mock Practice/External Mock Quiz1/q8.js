// Question : What would be the output of the code

//Anwer is 3 as this points to the data whose length is 3
let length = 5;

function countLen(item) {
    console.log(this.length);
}

const data = [countLen, "Apple", length]

data[0]('Script')