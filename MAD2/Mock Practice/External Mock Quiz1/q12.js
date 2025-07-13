// Question : What will be the output of the code?

// Answer is the using an arrow function, it’s likely undefined or refers to the outer lexical scope, which doesn't contain curr_status or terminal.

const app = new Vue ({
    el: '#app',
    data: {
        terminal: ['3', '2', '1'],
        curr_status: ["arrived", "departed", "delayed"]
    },
    computed: {
        state: () => {
            return `The flight 103 has ${this.curr_status[1]}  from terminal ${this.terminal[2]}.`
        }
    }
})