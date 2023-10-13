class Bankaccount{
    constructor(accountNo,balance){
        this.accountNo=accountNo;
        this.balance=balance;
    }
    widthdrow(){
        let a=400;
        this.balance=this.balance-a;
        console.log("your withdraow ammout is"+ this.balance);
    }
    deposite(){
        let x=100
        let y=this.balance+x;
       console.log("you have deposite ammout "+ x +"and  your blancce is"+ y);
    }
}
let bank=new Bankaccount(233,30000);
bank.widthdrow();
bank.deposite();