function BankAccount(CustomerName, Balance =0)
{
  //Variables inside the function are known as property in OOPS
  this.CustomerName = CustomerName;
  this.accountNumber = Date.now();
  // console.log(accountNumber);
  this.Balance = Balance;


  // Methods :- Functions inside a class is known as methods
  this.deposite = function(amount){
    // this.Balance = this.Balance+ amount; or 
    this.Balance += amount;
  }
  this.withdraw =(amount)=>{
    this.Balance -= amount;
  }
}

new BankAccount();  // it will create a new object with the above Constructor Function
// const Kushal_Acc = new BankAccount("kushal",1000);
// console.log(Kushal_Acc.accountNumber); 
// console.log(Kushal_Acc.Balance); // 1000 
// const John_Acc = new BankAccount("John"); // balance = 0 bydefault 
// console.log(John_Acc); // new space will be geneerated here 
// here Kushal_Acc and John_Acc are instance of BankAccount Function
// Never HardCode things and we don't want the balance to be updated by any user so for that we make it private and can only be changed via using setters 
 
 // // Calling methods 
 // Kushal_Acc.deposite(100)
 // console.log(Kushal_Acc); // 1100
//  Kushal_Acc.withdraw(50) 
// console.log(Kushal_Acc);// 1050

// but never do these things as it reduces the complexity and that's inheritance is used



// Get the values from the form
const  accounts =[];
const AccountForm = document.querySelector('#account_form');
const CustomerName = document.querySelector('#CustomerName');
const Balance = document.querySelector('#balance');
const AccNum = document.querySelector('#Acc_Number');
const DeposAmnt = document.querySelector('#DepAmount');

AccountForm.addEventListener('submit',(e) =>
                           {
  e.preventDefault();
  const account = new BankAccount(CustomerName.value , + Balance.value);
  accounts.push(account);
  console.log(accounts);
  // console.log(CustomerName.value, Balance.value);
})
// Features of OOPS 




