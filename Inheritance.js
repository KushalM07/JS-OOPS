// function BankAccount(CustomerName, Balance =0)
// {
//   this.CustomerName = CustomerName;
//   this.accountNumber = Date.now();
//   this.Balance = Balance;
// }

// BankAccount.prototype.deposit = function(amount) 
// {
//   this.Balance  +=  amount ;
// }
// BankAccount.prototype.withdraw = function(amount) 
// {
//   this.Balance  -=  amount ;
// }

// Widely Used is Class not this constructor thing 
// const KushalAcc = new BankAccount('Kushal', 500);
// console.log(KushalAcc);

 /* Suppose I want to add  current Account so what can i do ?
function CurrentAccount(CustomerName, Balance =0)
{
  this.CustomerName = CustomerName;
  this.accountNumber = Date.now();
  this.Balance = Balance;
  this.transcationLimit = 5000;

  CurrentAccount .prototype.TakenBussi = function(amount) 
{
  console.log("Taking Bussiness Loan " + Amount );
}
  
  
  No Not this way because it contradict DRY rule i.e. Do not repeat Youself
  
  // thus use Inheritance
  */


// Inheritane

// function SavingAcc (CustomerName , balance)
// {
//   BankAccount.call(this,CustomerName, balance );
//   // here this will point to SavingAcc and CustomerName and Balance is done which is known as constructor linking (linked Chlid Constructor with Parent Constructor )
  
//     this.transcationLimit = 5000;
// }
//   // To link Prototype we do it like 
// SavingAcc.prototype = Object.create(BankAccount.prototype)

// // and Similary with  Current account 


// function CurrentAcc (CustomerName,balance)
// {
//   BankAccount(this , CustomerName , balance );
//   this.limit =  5000;
// }
// CurrentAcc.prototype = Object.create(BankAccount.prototype);








// Inheritance Using Classes
 class BankAccount{
 CustomerName ;
   AccountNum ;
   balance=0;
   
   constructor(CustomerName, balance)
{
  this.CustomerName  = CustomerName;
  this.balance = balance;
}
   
   deposit(amount)
   {
     this.balance += amount;
   }
   withdraw(amount)
   {
     this.balance -= amount;
   }
}


class CurrentAcc extends BankAccount {
  transcatioLimit = 50000;
  
  constructor(CustomerName, balance=0){
    super(CustomerName,balance)
  }
}

class SavingAcc extends BankAccount {
  transcatioLimit = 10000;
  
  constructor(CustomerName, balance=0){
    super(CustomerName,balance)
  }
  takingPersonalLoan(amount)
  {
    console.log('Taking personal Loan', + amount);
  }
}