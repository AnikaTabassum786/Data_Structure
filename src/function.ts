//Two type of function . One is normal and another is arrow


//Normal Function
function addNormal (num1: number, num2: number): number{
    const result = num1 + num2
    console.log(result)
    return result
}

addNormal(1,2)


//Arrow function
const addArrow = (num3: number, num4:number): number => {
  const resultArrow = num3 + num4
  console.log(resultArrow)
  return resultArrow
}

addArrow(3,4)
