class Account{
acc_bal=0;
deposit_Amount(amount){
    this.acc_bal=this.acc_bal + amount
}
    get_bal(){
        return this.acc_bal
    }
}
let a1=new Account()
a1.deposit_Amount(5000)
a1.deposit_Amount(50000)
console.log(a1)
console.log(a1.get_bal)
