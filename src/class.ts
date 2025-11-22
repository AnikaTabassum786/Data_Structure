class Animal {
    name:string;
    species:string;
    sound:string;

    constructor( name:string, species:string,sound:string){
        this.name=name;
        this.species=species;
        this.sound=sound
    }
}

const dog = new Animal("Sinba","dog","Gau Gau")
console.log(dog.name)
console.log(dog)

