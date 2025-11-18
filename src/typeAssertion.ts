//Example of Type Assertion

let anything: any;
anything = "Anika";

(anything as number);
(anything as string);

const kgToConvertGram = (amount: number | string): number | string | undefined => {
    if (typeof (amount) === 'number') {
        return amount * 1000
    }
    else if (typeof (amount) === 'string') {
        const [digit] = amount.split(" ")
        console.log(typeof (digit), digit)
        return ((Number(digit)) * 1000)
    }
}

const result1 = kgToConvertGram(20) as number
console.log(result1)

const result2 = kgToConvertGram("20 kg") as string
console.log(result2)

console.log('------------')

type CustomError = {
    message: string
}

try {

}
catch (err) {
    console.log((err as CustomError).message)
}

