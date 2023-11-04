const user = {
    name: "Kingsley",
    age: 28,
    job: "Web Developer"
}
let clone = JSON.parse(JSON.stringify(user))
console.log(user)
console.log(clone)
// { name: 'Kingsley', age: 28, job: 'Web Developer' }
// { name: 'Kingsley', age: 28, job: 'Web Developer' }