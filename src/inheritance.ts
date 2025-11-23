class Student{

    name:string;
    age:number;
    address:string;

    constructor( name:string,age:number,address:string){
    this.name = name,
    this.age=age,
    this.address=address

    }

    getStudy(){
        console.log(`${this.name} study as much as he can`)
    }

}

const student1 = new Student('Roncy',40,'India')
student1.getStudy()