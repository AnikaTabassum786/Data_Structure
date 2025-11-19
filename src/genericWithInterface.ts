interface Developer<T,X=null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string;
    };
    smartWatch: T; //Dynamic
    bike?:X  //optional and dynamic
}


type BrandCharaWatch = {
 heartRate: string;
stopWatch: boolean
}

interface AppleWatch{
heartRate: string;
    callSupport: boolean;
    calculator: boolean;
    AiFeature: boolean
}


const poorDeveloper: Developer<BrandCharaWatch> = {
    name: 'Mr. Poor',
    salary: 20,

    device: {
        brand: "Lenovo",
        model: "A21",
        releasedYear: "2010",
    },
    smartWatch: {
        heartRate: '75',
        stopWatch: true
    },
    bike:null
}


const richDeveloper: Developer<AppleWatch,{
    brand:'Yamaha',
    engineCapacity:'200cc'

}> = {
    name: 'Mr. Rich',
    salary: 20,

    device: {
        brand: "Dell",
        model: "A26",
        releasedYear: "2025",
    },
    smartWatch: {
        heartRate: '85',
        callSupport: true,
        calculator: true,
        AiFeature: true
    }
}

//example for null parameter

const add = (num1:number, num2:number = 0) =>{
    console.log(num1+num2)
    return num1+num2
}
add(2)