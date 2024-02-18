//jai shri ram


// class BankAccount {
//   customername;
//   accountNumber;
//   balance = 0;
//   constructor(customername, balance) {
//     this.customername = customername;
//     this.accountNumber = Date.now();
//     this.balance = balance;
//   }
// }

// - Issue
// const rakeshAccount = new BankAccount("Rakesh k", 2000);
// rakeshAccount.balance = "Hello";
// console.log(rakeshAccount);

// {   customername: 'Rakesh k',
//     accountNumber: 1708259074353,
//     balance: 'Hello'
// }

// - common convention for private variables or field

// class BankAccount {
//     customername;
//     accountNumber;
//     _balance = 0;
//     constructor(customername, balance) {
//       this.customername = customername;
//       this.accountNumber = Date.now();
//       this._balance = balance;
//     }
// }

class BankAccount {
    customername;
    accountNumber;
    #balance = 0;  //private variable
    constructor(customername, balance) {
      this.customername = customername;
      this.accountNumber = Date.now();
      this.#balance = balance;
    }

    // setBalance(amount){
    //     if(isNaN(amount)){
    //         throw new Error("Amount is not a valid input")
    //     }
    //     this.#balance=amount
    // }

    // getBalance(){
    //     return this.#balance
    // }

    set balance(amount){
        if(isNaN(amount)){
            throw new Error("Amount is not a valid input")
        }
        this.#balance+=amount
    }
    
    get balance(){
        return this.#balance
    }
}

class CurrentAccount extends BankAccount{
    constructor(balance,amount){
        super(balance,amount)
        this.transactionLimit=50000
    }

    #calculateInterest(amount){
        console.log('Calculating Interest')
    }
    takeBusinessLoan(amount){
        this.#calculateInterest(amount)
        console.log('Taking business Loan',+amount)
    }
}
// const rakeshAccount=new BankAccount("Rakesh",2000)
// rakeshAccount.#balance=239 //not possible
// rakeshAccount.setBalance(400)
// console.log(rakeshAccount.getBalance())

// rakeshAccount.balance=399 //as a method call nhi kia h
// console.log(rakeshAccount)

const rakeshAccount=new CurrentAccount('Rakesh',300)
// rakeshAccount.calculateInterest(40000) // -> give error

rakeshAccount.takeBusinessLoan(40000)