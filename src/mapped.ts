const arrayOfNum : number[] = [1,3,0]
const arrayOfString : string[] = ['1','6','8']

// const arrayOfStringMap : string[] = arrayOfNum.map((num) => num.toString()) 

const arrayOfStringMap: string[] = arrayOfNum.map((num) => {
  return num.toString();
});

console.log(arrayOfStringMap)

type AreaOfNum = {
    height: number;
    width: number;
}

type height = AreaOfNum['height']

// type ArrOfString = {
//     height: string;
//     width: string
// }

// Below two ArrOfString is same 

// type ArrOfString = { 
//     [key in 'height'| 'width'] : string //akber key hobe height. arek ber key hobe width
// }

// type ArrOfString = { 
//     [key in keyof AreaOfNum] : string //akber key hobe height jeta ase AreaOfNum.R arek ber key hobe width jeta ase AreaOfNum
// }

// Dynamic Type

    /*keyOf T, T means this {height: string; width: string} object */
    /*key means akber kore itaration korbe */
    /*T[key] means T['height']:string */
    /*T[key] means T['width']:number */

    //key >> height
    //key >> width

type Area<T> = {
    [key in keyof T]: T[key]
}

const area1 : Area<{height: string; width: number}> = {
    height: '50',
    width: 20,
}
console.log(area1)

