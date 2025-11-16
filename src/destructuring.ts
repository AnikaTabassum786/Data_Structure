// object destructuring
// array destructuring


// Example-1
// object destructuring


const user = {
    id: 123,
    name:{
        firstName: "Anika",
        lastName:"Tabassum"
    },
    gender: 'female',
    age:26,
    favoriteColor:['blue','black'],
    hobby:'Reading Books'
}

const {favoriteColor,hobby:myhobby} = user //name alias. In destructuring, type is not use 
console.log('My favorite color',favoriteColor)
console.log(`My hobby is ${myhobby}`)

const {
    hobby,
    name: {lastName: myLastName}
} = user

console.log(myLastName)


// Example-2
// Array destructuring

const friends = ["karim","Rahim","Salim"];
const  [A,,mc] = friends
console.log(A,mc)
