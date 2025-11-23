class Person{
    name:string;

    constructor(name:string){
        this.name = name;
    }

    getSleep(numberOfhours:number){
        console.log(`${this.name} gets sleep ${numberOfhours} hours`)
    }
}

class Student extends Person{
    constructor(name:string){
        super(name)
    }

    doStudy(numberOfhours:number){
        console.log(`${this.name} studies ${numberOfhours} hours`)
    }
}

class Teacher extends Person{
    constructor(name:string){
        super(name)
    }
    takeClass(numberOfhours:number){
        console.log(`${this.name} takes classes for ${numberOfhours} hours`)
    }
}

// const student1 = new Student('Mr. Roncy')
// student1.doStudy(9)

//Function Guard

const isStudent=(user:Person)=>{
    return user instanceof Student // user is Student
}

const isTeacher=(user:Person)=>{
  return user instanceof Teacher // user is Teacher
}

const getUserInfo = (user:Person)=>{
    if(isStudent(user)){
        user.doStudy(9)
    }
    else if((isTeacher(user))){
        user.takeClass(5)
    }
    else{
        user.getSleep(10)
    }
}

// const getUserInfo = (user:Person)=>{
//     if(user instanceof Student){
//         user.doStudy(9)
//     }
//     else if(user instanceof Teacher){
//         user.takeClass(5)
//     }
//     else{
//         user.getSleep(10)
//     }
// }

const student1 = new Student('Mr. Roncy')
getUserInfo(student1)

const teacher1 = new Teacher('Mr. Alfred')
getUserInfo(teacher1)

const person1 = new Person('Mr. Person')
getUserInfo(person1)
