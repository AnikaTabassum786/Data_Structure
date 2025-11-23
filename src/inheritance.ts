class Person{
name:string; //common property
    age:number; //common property
    address:string; //common property

    constructor( name:string,age:number,address:string){
    this.name = name,
    this.age=age,
    this.address=address

    }

    //Common Method
    getStudy(){
        console.log(`${this.name} study as much as he can`)
    }
}

class Student extends Person{
   rollNo: number;

   constructor(name:string,age:number,address:string,rollNo:number){
    super(name,age,address)
   this.rollNo=rollNo
   }
   
}

class Teacher extends Person{
   
    designation:string //Own Property

    constructor(name:string,age:number,address:string,designation:string){
    super(name,age,address)//super call direct Person and this is a constructor of Person class
    this.designation=designation

    }

    //Common Method
    getStudy(){
        console.log(`${this.name} study as much as he can`)
    }

    takeClass(numberOfHours: number){
        console.log(`${this.name} takes class weekly ${numberOfHours} hours`)
    }

}

const student1 = new Student('Roncy',40,'India',3)
student1.getStudy()
console.log('------------------')

const teacher1 = new Teacher("Dr. Alfred",60,"India","Professor")
teacher1.takeClass(7)