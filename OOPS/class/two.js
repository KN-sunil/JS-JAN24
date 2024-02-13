class Account{
    acc_Id;
    acc_Name;
    acc_Bal;
    constructor(id,name,bal){
      this.acc_Id=id;
      this.acc_Name=name;
      this.acc_Bal=bal;
    }

    deposit_Amount(amount){
        this.acc_Bal=this.acc_Bal+amount
        
    }
    get_bal(){
        return this.acc_Bal
    }
}
var a1=new Account(101,"sunil",50000)
console.log(a1)

var a2=new Account(102, "rajesh",55000)
console.log(a2)

var a3=new Account(103,"shaan",60000)
console.log(a3)
console.log("*********************************")

a1.deposit_Amount(200)
a2.deposit_Amount(300)
a3.deposit_Amount(400)

console.log(a1)
console.log(a2)
console.log(a3)
