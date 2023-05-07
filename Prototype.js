
// Copied the previous code 
function BankAccount(CustomerName, Balance =0)
{
  //Variables inside the function are known as property in OOPS
  this.CustomerName = CustomerName;
  this.accountNumber = Date.now();
  // console.log(accountNumber);
  this.Balance = Balance;


  // Methods :- Functions inside a class is known as methods
  // this.deposite = function(amount){
  //   // this.Balance = this.Balance+ amount; or 
  //   this.Balance += amount;
  // }
  // this.withdraw =(amount)=>{
  //   this.Balance -= amount;
  // }
  
  // There is no need to write function here when we have prototype function 
}

const KushalAcc = new BankAccount('Kushal',100);
const JohnAcc = new BankAccount('John',1000);
console.log(KushalAcc,JohnAcc);

// as we will see the deposite and withdraw method is in both the objects and methods needs Memory as the methods should'nt be shared 
// we have to create something through which every class can share this methods without containing them  So, we can do it by using Prototype
// BankAccount.prototype.test='This is a test';  
 // never use arrow function in prototype 

// Deposite Function is in prototype
BankAccount.prototype.deposit = function(amount)
{
 
  this.balance += amount ;
}
// console.log(BankAccount.prototype);  
KushalAcc.deposit(300); // it will be available in the KushalAcc.deposite 
console.log(KushalAcc);

// Withdraw 
BankAccount.prototype.withdraw = function(amount)
{
  this.balance -= amount ;
}

/*
Output:- 

{test: 'this is test' , constructor : f >
test: "this is a test"
constructor:  BankAccount(CustomerName , Balance=0)
[[prototype]] :object 
}
 
 From where does this prototype came from :- when a function is made in the js 
 it adds the property called as prototype whose value  is an empty object 
 
  can we add Function in place of "this is a test "
*/
