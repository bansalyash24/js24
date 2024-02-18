//jai shri ram
// function BankAccount(customerName, balance = 0) {
//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance = balance;
// }

// BankAccount.prototype.deposit=function(amount){
//     this.balance+=amount
// }

// BankAccount.prototype.withdraw=function(amount){
//     this.balance-=amount
// }



// function CurrentAccount(customerName, balance = 0){
//     BankAccount.call(this,customerName,balance)
//     this.transactionLimit=50000
// }

// CurrentAccount.prototype=Object.create(BankAccount.prototype)

// CurrentAccount.prototype.takeBusinessLoan=function(amount){
//     console.log("Taking business loan: "+amount)
// }

// const rakeshAccount=new CurrentAccount("rakesh")
// console.log(rakeshAccount)



// function SavingAccount(customerName, balance = 0) {
//     BankAccount.call(this,customerName,balance)
//     this.transactionLimit=10000
// }

// SavingAccount.prototype.takePersonalLoan=function(amount){
//     console.log("Taking business loan: "+amount)
// }

// // const rakeshAccount=new SavingAccount("rakesh")
// // console.log(rakeshAccount)


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

class CurrentAccount extends BankAccount{
    transactionLimit=50000;
    constructor(customerName,balance=0){
        super(customerName,balance)
    }

    takeBusinessLoan(amount){
        console.log('Taking business Loan',+amount)
    }
}

class SavingAccount extends BankAccount{
    transactionLimit=10000;
    constructor(customerName,balance=0){
        super(customerName,balance)
    }
    takePersonalLoan(amount){
        console.log('Taking Personal Loan',+amount)
    }
}

const rakeshAccount=new SavingAccount("rakesh",500)
rakeshAccount.deposit(500);
rakeshAccount.withdraw(100)
rakeshAccount.takePersonalLoan(40000)
console.log(rakeshAccount)
