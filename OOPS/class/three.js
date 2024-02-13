class Account{
    acc_Id;
    acc_Name;
    acc_Bal;
    constructor(id,name,bal){
      this.acc_Id=id;
      this.acc_Name=name;
      this.acc_Bal=bal;
    }

}
var a1=new Account(101,"sunil",50000)
console.log(a1)

var a2=new Account(102, "rajesh",55000)
console.log(a2)