//jai shri ram

// function BankAccount(customerName, balance = 0) {
//   this.customerName = customerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;

//   this.deposit = function (amount) {
//     this.balance += amount;
//   };

//   this.withdraw = (amount) => {
//     this.balance -= amount;
//   };
// }

// // const rakeshAccount = new BankAccount("Rakesh", 1000);
// // const johnAccount = new BankAccount("John Doe", 1000);
// // rakeshAccount.deposit(5000);
// // console.log(rakeshAccount);


/* not a proper way to create methods as they are visible to everyone , so we use prototype ,by default prototype are {}*/

function BankAccount(customerName, balance = 0) {
      this.customerName = customerName;
      this.accountNumber = Date.now();
      this.balance = balance;
    
    //   this.deposit = function (amount) {
    //     this.balance += amount;
    //   };
    
    //   this.withdraw = (amount) => {
    //     this.balance -= amount;
    //   };
}

BankAccount.prototype.deposit=function(amount){
    this.balance+=amount
}

// This will not work because arrow function this refers to its outer scope 

// BankAccount.prototype.deposit=(amount)=>{
//     this.balance+=amount
// }

const rakeshAccount=new BankAccount("rakesh")
rakeshAccount.deposit(8918)
console.log(rakeshAccount)