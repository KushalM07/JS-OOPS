// Encapsulation is used to hide the uneccsary features that are not important to the End User 

class BankAccount{
  CustomerName ;
  accountNumber;
  #balance =0;
}


class CurrentAcc extends BankAccount {
  transcatioLimit = 50000;
  
  constructor(CustomerName, balance=0){
    super(CustomerName,balance)
  }
}

// here we can access balance outside the function that's why we use Encapsulation

/*
_balance :- Everything which starts with '_' undescore Convection are private field , In Old methods  but it is a convenction and does not solve the problem 

// But private propeties has been Introduced
where we have to use '#' instead of '_' underscore 
*/
#balance =100;
console.log(#balance);  // it gives Error 

// but what if want to use this then we have to make a method eg:-
set balance (amount)
{
  
  if(isNaN(amount)){
    throw new Error('Not an NUmber ');
  }
  get Balance()
  {
      return this.#balance; 
}
  this.#balance +=amount; // here we can use the balance property as it is inside the function   
  
} 
const Kushal = new BankAccount('Kushal', 200);
Kushal.balance(400);
console.log(Kushal.balance);