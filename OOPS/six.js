class Account{
    acc_Id=101;
    acc_Name="sunil acharya"
    acc_Bal=50000

    deposit_amount(amount){
        console.log(amount,":Amount deposited succecfully" )
       }
}
let a1=new Account()
console.log(a1)//
a1.deposit_amount(1)

let a2=new Account()// object a2 is not created
a2.deposit_amount()

