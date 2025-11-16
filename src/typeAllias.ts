// Type allias
// Example-1 for object

type User ={
    id:number;
    name:{
        firstName: string;
        lastName: string;
    };
    gender:'male'|'female';
    contactNo: string;
    address:{
        division:string;
        city:string;
    }
}

const user1: User = 
// {
//     id:number;
//     name:{
//         firstName: string;
//         lastName: string;
//     };
//     gender:'male'|'female';
//     contactNo: string;
//     address:{
//         division:string;
//         city:string;
//     }

    
// }
// =
{
    id:123,
    name:{
        firstName:"Anika",
        lastName:"Tabassum",
    },
    gender:'female',
    contactNo:"018...",
    address:{
        division:"Naraynganj",
        city:"Rupganj"
    }

}

const user2: User =
// {
//     id:number;
//     name:{
//         firstName: string;
//         lastName: string;
//     };
//     gender:'male'|'female';
//     contactNo: string;
//     address:{
//         division:string;
//         city:string;
//     }

    
// }=
{
    id:123,
    name:{
        firstName:"Rabeya",
        lastName:"Burshi",
    },
    gender:'female',
    contactNo:"018...",
    address:{
        division:"Barishal",
        city:"Rupganj"
    }

}

const myName = user1.name.firstName
console.log(myName)
console.log('---------------------')
const friendName = user2.address.division
console.log(friendName)


// Example-2 for boolean

type IsAdmin = true;
const isAdmin : IsAdmin = true;
console.log(isAdmin)

console.log('---------------------')

// Example-3 for string

type Name = string;
const amerName: Name = 'Anika Tabassum'
console.log(amerName)

console.log('---------------------')

// Example-4 for function

type Add = (num1:number, num2:number) => number
const add : Add = (num1, num2) => {
  const result = (num1+num2)
  console.log(result)
  return result
  
}

add(1,1)
