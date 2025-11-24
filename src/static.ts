class Counter {
    // count : number =0;
    static count : number =0;

    // increment(){
    //     return (Counter.count = Counter.count+1)
    // }

    // decrement(){
    //     return (Counter.count= Counter.count-1)
    // }

    static increment(){
        return (Counter.count = Counter.count+1)
    }

    static decrement(){
        return (Counter.count= Counter.count-1)
    }
}

const instance1 = new Counter() // One memory

console.log(Counter.increment())
console.log(Counter.increment())

// console.log(instance1.increment()) //1
// console.log(instance1.increment()) //1 ->2
// console.log(instance1.increment()) //2 ->3
// console.log(instance1.increment()) //3 ->4
// console.log(instance1.decrement()) //4 ->3

// const instance2 = new Counter() //another memory
// console.log(instance2.increment()) //1

// const instance2 = new Counter() //same memory
// console.log(instance2.increment()) //1

// const instance3 = new Counter() //same memory
// console.log(instance3.increment()) //1