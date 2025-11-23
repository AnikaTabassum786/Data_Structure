class BankAccount{
    public userName: string;
    public readonly userId:number;
    protected userBalance:number;

    constructor(userName:string,userId:number,  userBalance:number){
           this.userName = userName;
           this.userId = userId;
           this.userBalance = userBalance;
    }

    addBalance (balance:number){
        return this.userBalance = this.userBalance + balance
    }
}

class StudentBankAccount extends BankAccount{
    test(){
        this.userBalance
    }
}

const myAccount = new BankAccount('Anika',101,1000)
myAccount.addBalance(200)
myAccount.addBalance(20)
console.log(myAccount)