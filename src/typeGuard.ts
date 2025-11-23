type AlphaNumaric = number|string

const add=(num1:AlphaNumaric, num2:AlphaNumaric)=>{
   if(typeof (num1) === 'number' && typeof(num2) === 'number'){
          console.log(num1+num2)
          return num1+num2
   }
   else{
    
    const result =(num1.toString() + num2.toString())
      console.log(result)
      return result
   }
}

add(2,3)
add('2',3)
add(2,'3')
add('2','3')
console.log('-----------------')

type NormalUser = {
    name: string;
}

type AdminUser ={
    name: string;
    role: "Admin"
}

const getUser=(user: NormalUser|AdminUser)=>{
 if('role' in user){
     console.log(`This is ${user.name} and his role is ${user.role}`)
 }
 else{
    console.log(`This is ${user.name}`)
 }
}
getUser({name:"Orin"})
getUser({name:"Anika",role:'Admin'})