// Consider the code and answer

// Answer is 21 and 22 (as total fruits are 43 [user clicks 3 times plus 10 from start] and half went to apply rest to pineapple)

{/* <div id="app">
    <apple :apple_count="appleCount"></apple>
    <pineapple :pineapple_count="pineappleCount"></pineapple>
    <button @click="total_fruits += 1">Distribute fruit</button>
</div> */}

const apple = {
    template: '<p>Apple: {{apple_count}}</p>',
    props: ['apple_count'],
}

const pineapple = {
    template: '<p>Pineapple: {{pineapple_count}}</p>',
    props: ['pineapple_count'],
}

const app = new Vue ({
    el: '#app',
    data: {
        total_fruits: 10,
    },
    computed: {
        appleCount() {
            return Math.floor(this.total_fruits / 2)
        },
        pineappleCount() {
            return this.totalfruits % 2 == 0
            ? Math.floor(this.total_fruits / 2)
            : Math.floor(this.total_fruits / 2) + 1
        },
    },
    components: ( apple, pineapple), 
})