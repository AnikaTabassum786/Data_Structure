//keyof: type operator

type RichPeopleVehicle = {
   car:string; //key:value
   bike:string;
   cng:string
}

// these two lines both same meaning
type MyVehicle1 = 'bike'|'car'|'cng'
type MyVehicle2 = keyof RichPeopleVehicle

//here MyVehicle1 and MyVehicle2 both are same 

const myVehicle1: MyVehicle1 = 'bike';// MyVehicle1
console.log(myVehicle1)

const myVehicle2:MyVehicle2 ='bike';// MyVehicle2
console.log(myVehicle2)

console.log('------------------')

type User ={
    id:number;
    name:string;
    address: {
        city:string
    }
}

const user:User = {
    id:12,
    name:"Anika",
    address: {
        city:"Narayanganj"
    }
}

// const myId = user.id;
const myId = user['id'];
const  myName =user['name'];
const myAddress = user['address']['city']
// console.log({myId,myName,myAddress})


const getPropertyFromObject=<X>(obj: X, key: keyof X)=>{
    return obj[key]
}

const result1 = getPropertyFromObject(user,'name')
console.log(result1)
console.log('---------------')

const product={
    brand:"hp"
}

const result2 = getPropertyFromObject(product,"brand")
console.log(result2)
console.log('---------------')

const car={
    model:'BMW'
}

const result3 = getPropertyFromObject(car,"model")
console.log(result3)
console.log('---------------')



