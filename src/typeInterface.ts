//Type alias

type User={
    name:string;
    age:number
}

//Type alias
type Role={
    role:'admin'|'user'
}

//Type Interface 
interface Iuser{
    name:string;
    age:number
}

//Intersection
type UserWithRole = User & Role

//extends interface
interface IUserWithRole extends Iuser{
    role: 'admin'|'user'
}

const user1:UserWithRole={
 name:'M',
 age:20,
 role:'admin'
}

const user3:IUserWithRole={
 name:'P',
 age:20,
 role:'user'
}

const user2:Iuser={
 name:'X',
 age:20
}

//Type alias. In alias we use '=' sign

type Friends = string[]
// const friends:Ifriends = ["A","B","C"]
// console.log(friends)


//Interface do not use '='
interface Ifriends{
 [index:number]:string
}

const friends:Ifriends = ["A","B","C"]
console.log(friends)
console.log('------------------')

//Type alias
type Add = (num1:number,num2:number)=>number

//Type Interface
interface IAdd {
    (num1:number,num2:number):number
}

//use alias
const add:Add =(num1,num2) =>{
    const result =num1+num2
    console.log(result) 
    console.log('------------------')
    return result;
    
}


//use Interface
const sum:IAdd =(num1,num2) =>{
    const result =num1+num2
    console.log(result) 
    console.log('------------------')
    return result;
    
}

add(1,1)
sum(2,2)


