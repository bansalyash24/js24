//jai shri ram

// utility functions
// let id=1; // not good practice
class User{
    static id=1
    static cache={
        '1':'some value'
    }
    constructor(name,age,income){
        this.name=name;
        this.age=age
        this.income=income
        this.id=User.id++
    }


    // static block - ek hi baar chlta h jb kaafi saare static method call hote h
    static{
        console.log('Initialized')
    }

    static compareByAge(user1,user2){
        return user1.age-user2.age
    }

    static compareByIncome(user1,user2){
        return user1.income-user2.income
    }

    static hasInCache(){
        console.log(this.cache) //cache bhi static honi chahiye
    }

    checkCache(){
        console.log(User.cache)
    }
}

const user1=new User("Rakesh k",30,30000)
const user2=new User("John Doe",40,50000)
const user3=new User("John Doe",20,2000)

console.log(user1,user2,user3)

// Sort on the basis of age 
// Method -> 1
const users=[user1,user2,user3]
// users.sort((a,b)=>a.age-b.age)

users.sort(User.compareByIncome)
console.log(users)

//instance class ki static properties ko acess nhi krskta


// class Config{
//     static dbUser="username"
//     static dbPassword="secret"
//     static apiToken='abcd'
// }
// console.log(Config.apiToken)

User.hasInCache()

user1.checkCache()