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


const poorUser={
  name:"Anika",
  balance:0,
  bonus:0,
  totalSalary:0,

  addBalance (value:number): number {
   this.balance = this.balance + value
   return this.balance
  },
   
  addBonus(value:number) : number {
    this.bonus = this.bonus + value
    return this.bonus
  }, 

  salary() : number {
   this.totalSalary = this.balance + this.bonus
   return this.totalSalary
  }

}

poorUser.addBalance(10000)
poorUser.addBonus(2000)
poorUser.salary()



console.log(`Salary,${poorUser.balance}`)
console.log(`Eid Bonus,${poorUser.bonus}`)
console.log("Total Amount",poorUser.salary())



