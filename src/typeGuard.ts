const add=(num1:number|string, num2:number|string)=>{
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