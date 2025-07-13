// Question 9. Consider the code below and predict the output

//Answer is the OG courses as a timeplapse of 2 seconds due to which it is not immediately registered
const courses=[
    {name: 'MAD-1', description: 'CSS, HTML, Flask, API, Sqlite'},
    {name: 'MAD-2', description: 'Javascript, VueJS, Flask, API'}
]

function getCourse(){
    setTimeout(()=> {
        let allCourses=[]
        courses.forEach((course, index) => {
            allCourses.push(course)
        })
        console.log(allCourses)
    })
}

function addCourse(course){
    setTimeout(()=>{
        courses.push(course)
    },2000)
}

addCourse({name: 'MAD-3', description: 'Watch this space !!'})
getCourse();