// Question 6. What will be rendered by the browser?

//Index.html code
<div id = "app1">
    <div id="app2">
        <p> The first message is: {{ message1 }} </p>
    </div>
    <p> The second messagge is : {{ message2 }} </p>
</div>
//<script src = "app.js"></script>

// Answer is (as message2 is not inside app2 it couldn't access it at all)
    // The first message is: Abhishek
    // The second message is:
const a = new Vue ({
    el: '#app1', 
    data : {
        message1: 'Abhishek',
    },
})

const b = new Vue ({
    el: '#app2',
    data: {
        message2: 'Rajput',
    },
})