class BankAccount{
    public userName: string;
    public readonly userId:number;
    protected userBalance:number;

    constructor(userName:string,userId:number,  userBalance:number){
           this.userName = userName;
           this.userId = userId;
           this.userBalance = userBalance;
    }

    // addBalance (balance:number){
    //      this.userBalance = this.userBalance + balance
    // }

    //setter
    set addBalance(amount:number){
      this.userBalance = this.userBalance + amount
    }

    // getBalance(){
    //     return this.userBalance
    // }

    // getter
    get getBalance(){
        return this.userBalance
    }
}



const myAccount = new BankAccount('Anika',101,1000)

// myAccount.addBalance(200) // calling a function
// myAccount.addBalance(20)
// console.log(myAccount.getBalance()) // calling a function

myAccount.addBalance = 500
myAccount.addBalance = 300

console.log(myAccount.getBalance)
// console.log(myAccount)