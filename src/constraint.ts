//constraint means strict rules deya

type Student = { id: number, name: string, dob:string, class:string }

const addCourse = <T extends Student>(studentInfo: T) => {
    return {
        course: "Next Level",
        ...studentInfo
    }
}

const student1 = {
    id: 1,
    name: "Pritha",
    hasBF: true
}

const student2 = {
    id: 1,
    name: "Ani",
    isMarried: false,
    isJob: true
}

const student3 = {
    id: 9,
    name: "Mithila Gomes",
    dob:"20-21-19",
    class:"1",
    isNun: true
}

// const result3 = addCourse(student2)
// console.log(result3)
console.log('------------------')

// const result4 = addCourse(student1)
// console.log(result4)
console.log('------------------')

const result5 = addCourse(student3)
console.log(result5)
console.log('------------------')