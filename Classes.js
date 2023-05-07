Class BankAccount{ 
  // this is how class is being created 
  // properties are the variables inside it and function inside it are known as methods  
  // customerName = 'Kushal' // this is hardcoded 
  customerName ;
  AccountNo;
  balance =0; 
  // how will it know what to send to Customer Name and what to send to Balance 
  // That's why we use Constructor 
 constructor(customerName, balance =0 ) {
   this. customerName = customerName;
   this.AccountNo =  Date.now();
   this.balance = balance ; 
 }
  deposite(amount){
    this.balance += amount;
}
   deposite(amount){
    this.balance += amount;
}
}
const KushalAcc = new BankAccount('Kushal Dobhal' , 1000 );
KushalAcc.deposite(100);
KushalAcc.Withdraw(200);
console.log(KushalAcc);


// Classes are tend to be more clean  



hello();
function hello(){
  console.log('hello');
  
}
// It will work because of hoisting 


// But Hoisting does'nt work with classes i.e you have to declare class first and then use it 


// Syntax to initalize the class
 

// 1) Class BankAccount {}
// 2) const BankAccount  = class{}