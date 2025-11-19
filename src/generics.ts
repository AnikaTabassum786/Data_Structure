//dynamically generalize: Generic

//Example-1

// type GenericStringArray = Array<string>
// type GenericNumberArray = Array<number>
// type GenericBooleanArray = Array<boolean>

type GenericArray<T> = Array<T>


// const friends: string[] = [ "Mila","Kaniz","Pushpo"]
// const friends: Array<string> = [ "Mila","Kaniz","Pushpo"]
const friends: GenericArray<string> = [ "Mila","Kaniz","Pushpo"]


// const rollNumber: number[] = [2,3,5]
// const rollNumber:Array<number> = [2,3,5]
const rollNumber:GenericArray<Number> = [2,3,5]

// const isEligibleList:boolean[] = [true,false,true]
// const isEligibleList:Array<boolean> = [true,false,true]
const isEligibleList:GenericArray<boolean> = [true,false,true]

//Example-2

type Coordinates<T,M> = [T,M]

const coordinates1:Coordinates<number,number> = [20,30]
const coordinates2:Coordinates<string,string> =['20','30']
// console.log(coordinates1,coordinates2)

//Example-3- Array of object
 

type User = {name:string,age:number}

const userList: GenericArray<User>=[
    {
        name:'X',
        age:10
    },
    {
        name:'Y',
        age:20
    }
]
console.log(userList)

