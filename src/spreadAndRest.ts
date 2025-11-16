//Spread operator

//Example -1 

const schoolFriend: string[] = ["Kanij","Mila"]
const collegeFriend : string[] = ["Pushpo","Piata","Rahi"]
const universityFriend : string[] = ["Nur islam", "Soron"]

 schoolFriend.push(...collegeFriend,...universityFriend)
 console.log(schoolFriend)
 console.log("-------------------------")

 //Example -2

 const userInfo= {
    name: "Anika Tabassum",
    Age: 26,
 }

 const otherInfo={
    hobby: "Reading Books",
    aim: "Higher study",

 }

 const allInfo = {...userInfo,...otherInfo}
 console.log(allInfo)

 console.log("-------------------------")

/* -------------------------------------------------------------*/
/* -------------------------------------------------------------*/
/* -------------------------------------------------------------*/


//Rest operator

//Example -1  without map

const sendInvitation = (friend1:string, friend2:string, friend3:string) => {

   console.log(`Send Invitation to ${friend1}`)
   console.log(`Send Invitation to ${friend2}`)
   console.log(`Send Invitation to ${friend3}`)
}

sendInvitation("Nabila","Pushpo","Mila")

console.log("-------------------------")

//Example -2  with map

// For each loop. For each loop working on array.

const sendInvite = (...friends: string[]) => {

   friends.forEach((friend:string)=>{
      return console.log("My friend", friend)
   })
}

sendInvite("Piata","Rahi","Pagla Mim")

console.log("-------------------------")

//Example -3  with map


const crushList = (...crushes:string[]) => {
   crushes.forEach((crush:string)=>{
      return console.log("My crush", crush)
   })
}

crushList("Liaquat","Orin","Jawad","Jishan")


