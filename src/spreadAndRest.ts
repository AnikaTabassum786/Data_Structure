//Spread operator

//Example -1 

const schoolFriend: string[] = ["Kanij","Mila"]
const collegeFriend : string[] = ["Pushpo","Piata","Rahi"]
const universityFriend : string[] = ["Nur islam", "Soron"]

 schoolFriend.push(...collegeFriend,...universityFriend)
 console.log(schoolFriend)

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