// Example of nullable types

const getUser =(input:string | null)=>{

    if(input){
        console.log(`From DB: ${input}`)
    }
    else{
        console.log(`From DB: ALL USER`)
    }   

}
getUser(null)

 console.log("----------------------")

// Example of Unknown types

const discountCalculator = (price:unknown) =>{

    if(typeof(price) === 'number'){
        const discountPrice = ((price*10)/100)
        console.log('Discounted Price When User input number tk', discountPrice)
         console.log("----------------------")
    }

    else if(typeof(price) === 'string'){
        const [discountPrice] = price.split(' ')
        console.log('string type',discountPrice)
        
        const afterConvert = (Number(discountPrice))
        console.log('Number type',afterConvert)

         const discountedPrice = ((afterConvert*10)/100)
         console.log('Discounted Price When User input String tk',discountedPrice)
          console.log("----------------------")
        
    }

    else{
        console.log('Wrong Input')
    }

}

discountCalculator(100)
discountCalculator("100 tk")
discountCalculator(null)