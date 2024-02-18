//jai shri ram

// Hoisting Not allowed 
// const rakeshAccount=new BankAccount("rakesh",10)
// console.log(rakeshAccount)

// class BankAccount{
//     constructor(customerName,balance=0){
//         this.customerName=customerName
//         this.accountNumber=Date.now()
//         this.balance=balance
//     }

//     deposit(amount){
//         this.balance+=amount
//     }

//     withdraw(amount){
//         this.balance-=amount
//     }
// }


const BankAccount=class{
    constructor(customerName,balance=0){
        this.customerName=customerName
        this.accountNumber=Date.now()
        this.balance=balance
    }

    deposit(amount){
        this.balance+=amount
    }

    withdraw(amount){
        this.balance-=amount
    }
}
// const rakeshAccount=new BankAccount("rakesh",10)
// console.log(rakeshAccount)
