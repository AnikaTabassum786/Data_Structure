//? ternary operator: decision making
//?? : nullish coalescing operator -- it working on null and undefined
// ? operator chaining


const biyerJonnoEligible = (age:number)=>{

    // if (age>=21){
    //     console.log("Eligible for marry")
    // }
    // else{
    //     console.log("Not Eligible for marry")
    // }

    const boyos = age>=21 ?'Eligible for marry':'Not Eligible for marry'
    console.log(boyos)
    return boyos
}

biyerJonnoEligible(20)

console.log('-------------------')


//Example for nullish-null
const userTheme = null
const selectedTheme = userTheme ?? 'Light Theme'
console.log(selectedTheme)


console.log('-------------------')
const theme = undefined
const selectTheme = theme ?? 'Light Theme'
console.log(selectTheme)

console.log('-------------------')

const useTheme = ''
const usedTheme = useTheme ?? 'Light Theme'
console.log(usedTheme)

console.log('-------------------')

const websiteTheme = 'DarkTheme'
const myTheme = websiteTheme ?? 'Light Theme'
console.log(myTheme)

console.log('-------------------')

const isAuthenticated = null;
const resultWithTernary = isAuthenticated ? isAuthenticated :'Yor are guest'//null is a falsy
const resultWithNullish = isAuthenticated ?? 'Yor are guest'
console.log({resultWithTernary},{resultWithNullish})
console.log('-------------------')






