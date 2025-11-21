// const createArrayWithString=(value:string)=>[value]
// const createArrayWithNumber=(value:number)=>[value]
// const createArrayWithUserObject = (value:{id:number; name:string})=>{
//     return [value]
// }

//Example -1 Use Generic dynamically

const createArrayWithGeneric =<T>(value:T)=>{
    return [value]
    // return {value}
}

const arrayString = createArrayWithGeneric("Apple");
const arrayNum = createArrayWithGeneric(22)
const arrayObject = createArrayWithGeneric({
    id:123,
    name:"Anika"

})

console.log(arrayString,arrayNum,arrayObject)
console.log('---------------------')

const createWithTupleWithGeneric=<X,Y>(param1:X,param2:Y) =>  [param1,param2]

const result1 = createWithTupleWithGeneric("Hawa",false)
const result2 = createWithTupleWithGeneric(1,"Jinuk")

console.log(result1,result2)
console.log('---------------------')

//Example -2 Use Generic dynamically

const addCourse=<T>(studentInfo:T)=>{
    return {
        course:"Next Level",
        ...studentInfo
    }
}

const student1 ={
  id:1,
  name:"Pritha",
  hasBF:true
}

const student2 ={
  id:1,
  name:"Ani",
  isMarried:false,
  isJob:true
}

const result3 = addCourse(student2)
console.log(result3)

const result4 = addCourse(student1)
console.log(result4)