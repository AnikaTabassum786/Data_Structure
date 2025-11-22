// class Animal {
//     name:string;
//     species:string;
//     sound:string;

//     constructor( name:string, species:string,sound:string){
//         this.name=name;
//         this.species=species;
//         this.sound=sound
//     }

//     makeSound(){
//         console.log(`This ${this.name} make sound ${this.sound}`)
//     }
// }


// Parameter Properties



class Animal {

    //Public key word define property and also initialize property

    constructor( 
        public name:string,
        public species:string, 
        public sound:string){
    }

    makeSound(){
        console.log(`This ${this.name} make sound ${this.sound}`)
    }
}

const dog = new Animal("Sinba","dog","Gau Gau")
const cat = new Animal("Miko","Cat","Mew.. Mew..")

console.log(dog.name)
console.log(dog)

console.log('-------------')

cat.makeSound()
dog.makeSound()



